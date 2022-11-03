import profileImg from "../../images/profile__img.svg";
import shareBtn from "../../images/share.svg";
import shareBtnMobile from "../../images/3dots.svg";

const Profile = () => {
  return (
    <section className="flex items-center justify-center flex-col pt-16  text-center">
      <div className="share_btn flex ml-auto relative">
        {/* Tool Tip */}
        <div className="tooltip">
          <span className="tooltip-txt">Share Link</span>
        </div>
        <div className="border-2 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
          <img className="hidden md:block" src={shareBtn} alt="share icon" />
          <img
            className="block md:hidden"
            src={shareBtnMobile}
            alt="share icon"
          />
        </div>
      </div>
      <div className="profile-img relative">
        <img src={profileImg} alt="profile" id="profile__img" />
      </div>

      {/* twitter username */}
      <h1 id="twitter" className="my-6 font-bold text-xl">
        Godwin Opara
      </h1>

      {/* slack username */}
      <h2 id="slack">godwin</h2>
    </section>
  );
};

export default Profile;
