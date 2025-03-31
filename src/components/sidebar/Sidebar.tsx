
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  CalendarDays, 
  CreditCard, 
  UserRound, 
  Settings, 
  ChevronUp, 
  ChevronDown, 
  List 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, path, isActive }) => {
  return (
    <Link
      to={path}
      className={cn(
        "flex items-center gap-3 px-5 py-3 text-lg font-medium transition-colors",
        isActive ? "bg-blue-100 text-black" : "text-black hover:bg-gray-100"
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export const Sidebar: React.FC = () => {
  const [settingsOpen, setSettingsOpen] = useState(true);
  
  // Determine current path for highlighting active link
  const currentPath = window.location.pathname;

  return (
    <div className="min-h-screen w-60 border-r border-gray-200 bg-white flex flex-col">
      {/* Logo */}
      <div className="p-5 border-b border-gray-200">
        <h1 className="text-2xl font-bold">Emonshi</h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col flex-1">
        <NavItem 
          icon={<LayoutDashboard size={24} />} 
          label="Dashboard" 
          path="/" 
          isActive={currentPath === "/"} 
        />
        <NavItem 
          icon={<Users size={24} />} 
          label="Customers" 
          path="/customers" 
          isActive={currentPath === "/customers"} 
        />
        <NavItem 
          icon={<CalendarDays size={24} />} 
          label="Reservations" 
          path="/reservations" 
          isActive={currentPath === "/reservations"} 
        />
        <NavItem 
          icon={<CreditCard size={24} />} 
          label="Transactions" 
          path="/transactions" 
          isActive={currentPath === "/transactions"} 
        />
        <NavItem 
          icon={<UserRound size={24} />} 
          label="Agents" 
          path="/agents" 
          isActive={currentPath === "/agents"} 
        />
        
        {/* Settings section with dropdown */}
        <div>
          <div 
            className={cn(
              "flex items-center justify-between px-5 py-3 cursor-pointer text-lg font-medium",
              settingsOpen ? "bg-blue-100" : "hover:bg-gray-100"
            )}
            onClick={() => setSettingsOpen(!settingsOpen)}
          >
            <div className="flex items-center gap-3">
              <Settings size={24} />
              <span>Settings</span>
            </div>
            {settingsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
          
          {settingsOpen && (
            <div className="pl-12 flex flex-col">
              <Link 
                to="/categories" 
                className="py-3 text-lg font-medium hover:text-gray-700"
              >
                Categories
              </Link>
              <Link 
                to="/services" 
                className="py-3 text-lg font-medium hover:text-gray-700"
              >
                Services
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};
