import { BsFolder2Open } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { TbSmartHome } from "react-icons/tb";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center gap-6 px-6 py-3 md:gap-15 md:px-18 md:py-8 
        rounded-full backdrop-blur-md bg-white/30 
        shadow-lg text-sm md:text-xl">
        
        
        <a href="#home" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition">
         <TbSmartHome  className="text-xl md:text-3xl whitespace-nowrap"/>
          <span className="font-medium">Home</span>
        </a>

       
        <a href="#project" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition">
          <BsFolder2Open className="text-xl md:text-2xl" whitespace-nowrap/>
          <span className="font-medium">Projects</span>
        </a>

      
        <a href="#call" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition whitespace-nowrap">
          <FiPhoneCall  className="text-xl md:text-2xl" />
          <span className="font-medium">Book a Call</span>
        </a>
      </div>
    </nav>
  );
}
