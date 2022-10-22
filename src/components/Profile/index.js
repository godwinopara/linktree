import profileImg from "../../images/profile__img.svg";
import "./profile.css";

const Profile = () => {
  return (
    <section className="profile">
      <div className="profile-img">
        <img src={profileImg} alt="" />
      </div>
      <h1>Annette Black</h1>
    </section>
  );
};

export default Profile;
