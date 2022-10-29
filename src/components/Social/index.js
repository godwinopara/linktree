import githubIcon from "../../images/github.svg";
import slackIcon from "../../images/slack.svg";
import "./social.css";

const Social = () => {
  return (
    <section className="social">
      <a
        href="https://app.slack.com/client/T042F7V19Q8/C041EKLQGT1"
        target={"_blank"}
        rel="noreferrer"
      >
        <img src={slackIcon} alt="Slack Icon" />
      </a>
      <a
        href="https://github.com/godwinopara"
        target={"_blank"}
        rel="noreferrer"
      >
        <img src={githubIcon} alt="Github Icon" />
      </a>
    </section>
  );
};

export default Social;
