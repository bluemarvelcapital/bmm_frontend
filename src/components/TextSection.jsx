import TextFooter from "./TextFooter";
import Logo from "./Logo";

const TextSection = () => {
  return (
    <div className="bg-primary max-md:h-[100dvh] items-center text-white py-10 md:col-span-6 sm:col-span-6 w-full text-sm xl:text-lg xl:px-10 px-2 md:px-4 h-full my-auto flex flex-col justify-center mx-auto">
      <Logo />
      <div className="flex flex-col items-center sm:gap-y-[50px] gap-y-10 max-w-[470px] mx-auto">
        <p className="sm:text-[40px] text-3xl max-sm:text-center font-bold sm:leading-[60px]">
          Notice : Website revamp is in progress
        </p>
        <span className="sm:text-xl text-sm sm:leading-8 text-lightWhite">
          We are currently revamping our website to enhance your browsing
          experience. During this time, We may be unavailable. We apologize for
          any inconveniences and appreciate your patience
        </span>
      </div>
      <TextFooter />
    </div>
  );
};

export default TextSection;
