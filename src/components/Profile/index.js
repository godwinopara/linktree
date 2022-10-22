import profileImg from "../../images/profile__img.svg";
import "./profile.css";
import shareBtn from "../../images/share.svg";
import shareBtnMobile from "../../images/3dots.svg";

const Profile = () => {
  return (
    <section className="profile">
      <div className="share_btn">
        {/* Tool Tip */}
        <div className="tooltip">
          <span className="tooltip-txt">Share Link</span>
        </div>
        <div className="share-btn-wrapper">
          <img
            className="share-btn-icon share-btn-desktop"
            src={shareBtn}
            alt="share icon"
          />
          <img
            className="share-btn-icon share-btn-mobile"
            src={shareBtnMobile}
            alt="share icon"
          />
        </div>
      </div>
      <div className="profile-img">
        <img src={profileImg} alt="profile" id="profile__img" />
      </div>
      <h1 id="twitter">Godwinopara12</h1>
      {/* <h2></h2> */}
    </section>
  );
};

export default Profile;
