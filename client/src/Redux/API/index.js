import axios from "axios";
const API_URL = "http://localhost:5000/api/";

const API = axios.create({ baseURL: API_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    const token = JSON.parse(localStorage.getItem("user")).token;
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const logInApi = (name, password) =>
  API.post(`/user/logIn`, {
    name,
    password,
  });

export const registerApi = (name, email, password) =>
  API.post(`/user/register`, { name, email, password });

export const fetchUsersApi = (searchQuery) =>
  API.get(`/user/fetchAllUser?search=${searchQuery}`);

export const createChatApi = (userId) => API.post("/chat", { userId });

export const createGroupChatApi = (name, users) =>
  API.post("/chat/create-group", { name, users });

export const fetchChatsApi = () => API.get("/chat");

export const fetchGroupsApi = (searchQuery) =>
  API.get(`/chat/groups?search=${searchQuery}`);

export const exitGroupChatApi = (chatId) =>
  API.put("/chat/exit-group", { chatId });

export const joinGroupChatApi = (chatId) =>
  API.put("/chat/join-group", { chatId });

export const sendMessageApi = (chatId, content) =>
  API.post("/message", { chatId, content });

export const fetchMessageApi = (chatId) => API.get(`/message/${chatId}`);
