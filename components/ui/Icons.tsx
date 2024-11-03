import {
  AlertCircle,
  ArrowRight,
  BookText,
  Check,
  ChevronDown,
  ChevronRight,
  Copyright,
  DollarSign,
  DotIcon,
  LogOut,
  MapPin,
  Menu,
  Moon,
  SlidersHorizontal,
  Sparkles,
  Sun,
  User,
  type Icon as LucideIconType,
} from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSpinner,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Icons = {
  sparkle: Sparkles,
  rightarrow: ArrowRight,
  menu: Menu,
  dropdown: ChevronDown,
  twitter: RiTwitterXFill,
  youtube: FaYoutube,
  linkedin: FaLinkedin,
  github: FaGithub,
  instagram: FaInstagram,
  telergam: FaTelegramPlane,
  loading: FaSpinner,
  copyright: Copyright,
  sun: Sun,
  moon: Moon,
  check: Check,
  "chevron-right": ChevronRight,
  "dot-filled": DotIcon,
  location: MapPin,
  currency: DollarSign,
  description: BookText,
  profile: User,
  logout: LogOut,
  filter: SlidersHorizontal,
  alert: AlertCircle,
};

export type IconType = typeof LucideIconType;
export default Icons;
