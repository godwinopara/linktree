import profileImg from "../../images/profile__img.svg";
import "./profile.css";
import shareBtn from "../../images/share.svg";

const Profile = () => {
  return (
    <section className="profile">
      <div className="share_btn">
        {/* Tool Tip */}
        <div className="tooltip">
          <span className="tooltip-txt">Share Link</span>
        </div>

        <img src={shareBtn} alt="share icon" />
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
