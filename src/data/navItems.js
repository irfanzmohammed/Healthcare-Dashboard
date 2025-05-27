import { BiSolidDashboard } from "react-icons/bi";
import { CalendarDays, FileChartLine, MessageCircleMore, History } from 'lucide-react';
import { MdAddBox } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoSettings } from "react-icons/io5";

export const navItems = [
  // General section
  {
    id: "1",
    label: "Dashboard",
    icon: BiSolidDashboard,
    section: "General"
  },
  {
    id: "2",
    label: "History",
    icon: History,
    section: "General"
  },
  {
    id: "3",
    label: "Calendar",
    icon: CalendarDays,
    section: "General"
  },
  {
    id: "4",
    label: "Appointments",
    icon: MdAddBox,
    section: "General"
  },
  {
    id: "5",
    label: "Statistics",
    icon: FileChartLine,
    section: "General"
  },
  // Tools section
  {
    id: "6",
    label: "Chat",
    icon: MessageCircleMore,
    section: "Tools"
  },
  {
    id: "7",
    label: "Support",
    icon: IoIosCall,
    section: "Tools"
  },
  {
    id: "8",
    label: "Setting",
    icon: IoSettings,
    
  },
];