import profileImg from "../images/profile__img.svg";
import shareBtn from "../images/share.svg";
import shareBtnMobile from "../images/3dots.svg";

const HomeTest = () => {
  return (
    <>
      <header className="flex items-center justify-center flex-col pt-16  text-center">
        <div className=" share_btn flex justify-end w-100 m-auto relative">
          {/* Tool Tip */}
          <div className="tooltip">
            <span className="tooltip-txt">Share Link</span>
          </div>
          <div className="border-2 w-64 border-gray-300 h-10  rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 md:w-10">
            <img className="hidden md:block" src={shareBtn} alt="share icon" />
            <img
              className="block h-4 w-5  md:hidden"
              src={shareBtnMobile}
              alt="share icon"
            />
          </div>
        </div>
        <div className="profile-img relative">
          <img src={profileImg} alt="profile" id="profile__img" />
        </div>

        {/* twitter username */}
        <h1 id="twitter" className="mt-6 font-bold text-xl">
          Godwin Opara
        </h1>

        {/* slack username */}
        <h2 id="slack">godwin</h2>
      </header>
    </>
  );
};

export default HomeTest;
