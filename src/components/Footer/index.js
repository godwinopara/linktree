import ZuriLogo from "../../images/logo.svg";
import I4GLogo from "../../images/I4G.svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <img src={ZuriLogo} alt="Zuri Logo" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={I4GLogo} alt="Ingressive For Good Logo" />
      </div>
    </footer>
  );
};

export default Footer;
