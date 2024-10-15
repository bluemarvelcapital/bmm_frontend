import { FaInstagram, FaLinkedin } from "react-icons/fa";

const TextFooter = () => {
  return (
    <footer className="mt-auto text-sm max-w-[470px] mx-auto flex-col flex gap-y-4 sm:gap-y-8">
      <div className="flex flex-col lg:flex-row gap-5 items-center">
        <span>You can also follow us on</span>
        <ul className="flex flex-row items-center gap-x-5">
          <li className="h-10 w-10 rounded-[10px] text-lightBlue bg-white flex items-center justify-center">
            <a href="">
            <FaInstagram className="h-7 w-7" />
            </a>
          </li>
          <li className='h-10 w-10 rounded-[10px] text-lightBlue bg-white flex items-center justify-center'>
            <a href="">
            <FaLinkedin className="h-7 w-7" />
            </a>
          </li>
        </ul>
      </div>
      <span className="text-center">&copy; Copyrights BlueMarvelManagement | All Rights Reserved</span>
    </footer>
  );
};

export default TextFooter;




