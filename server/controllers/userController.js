const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

// Function to handle user log-in
const logInController = async (req, res) => {
  try {
    // Extract email and password from the request body
    const { name, password } = req.body;

    // Check for missing credentials
    if (!name || !password) {
      return res.status(400).json({ message: "Missing Credentials." });
    }

    // Find user in the database by email
    const user = await User.findOne({ name });

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ message: "User Not Found." });
    }

    // Compare the entered password with the hashed password stored in the database
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    // Check if the password is correct
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid Credentials." });
    }

    // Generate a JWT token for the authenticated user
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    // Return a successful response with user details and token
    return res.status(200).json({
      id: user._id,
      name: user.name,
      email: user.email,
      token,
      message: "Log-in successful.",
    });
  } catch (error) {
    // Handle internal server error
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Function to handle user registration
const registerController = async (req, res) => {
  try {
    // Extract user details from the request body
    const { name, email, password } = req.body;

    // Check for missing credentials
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing Credentials." });
    }

    // Check if the user already exists in the database
    const existingUser = await User.findOne({ email });

    // If user already exists, return an error response
    if (existingUser) {
      return res.status(400).json({ message: "User Already Exists." });
    }

    // UserName Already Taken
    const alreadyUserNameTaken = await User.findOne({ name });

    // If user already exists, return an error response
    if (alreadyUserNameTaken) {
      return res.status(400).json({ message: "UserName Already Taken." });
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user in the database
    const createdUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Generate a JWT token for the newly created user
    const token = jwt.sign(
      { email, id: createdUser._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    // Return a successful response with user details and token
    return res.status(201).json({
      id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      token,
      message: "Registration successful.",
    });
  } catch (error) {
    // Handle internal server error
    return res.status(500).json({ message: "Internal server error." });
  }
};

const fetchAllUsers = async (req, res) => {
  try {
    const query = req.query.search
      ? {
          $or: [
            { name: { $regex: req.query.search, $options: "i" } },
            { email: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};
    const users = await User.find(query).find({ _id: { $ne: req.user._id } });
    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Export the functions for use in other modules
module.exports = { logInController, registerController, fetchAllUsers };
