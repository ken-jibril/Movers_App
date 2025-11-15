import { Link } from "react-router-dom";
import { FaEnvelope, FaHome, FaInfoCircle, FaTruck, FaArrowRight } from "react-icons/fa";

function Header() {
    return (
        <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
           <Link to="/" className="flex items-center px-1 gap-1 font-medium mx-4"><FaTruck className="scale-x-[-1] text-2xl"/>MoveEasy</Link>
           <div className="gap-4 flex">
            <Link to="/home" className="flex items-center justify-center gap-2 group px-3 py-3 bg-gray-200 rounded-full group hover:bg-gray-300  transition-all duration-300">
            <FaHome size={25}/>
            <span className="overflow-hidden max-w-0 group-hover:max-w-xs transition-all duartion-300 font-medium whitespace-nowrap">Home</span>
            </Link>
            <Link to="/about" className="flex items-center justify-center gap-2 group px-3 py-3 bg-gray-200 rounded-full group hover:bg-gray-300  transition-all duration-500">
            <FaInfoCircle size={25} />
            <span className="overflow-hidden max-w-0 group-hover:max-w-xs transition-all duartion-300 font-medium whitespace-nowrap">About</span>
            </Link>
            <Link to="/contact" className="flex items-center justify-center gap-2 group px-3 py-3 bg-gray-200 rounded-full group hover:bg-gray-300  transition-all duration-500">
            <FaEnvelope size={25}/> 
            <span className="overflow-hidden max-w-0 group-hover:max-w-xs transition-all duartion-300 font-medium whitespace-nowrap">Contact</span>
            </Link>
           </div>
           <Link to="/contact" className="font-medium flex items-center mx-4 group ">Get in Touch<FaArrowRight size={15} className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1" /></Link>
        </header>
    )
}

export default Header;