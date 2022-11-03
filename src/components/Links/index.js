import "./link.css";
import { linksData } from "../../data/linkData";

const Links = () => {
  return (
    <div className="links-wrapper">
      {linksData.map((link, id) => {
        return (
          <div key={id} className={`link ${link.id}`}>
            <a href={link.url} id={link.id}>
              {link.name}
            </a>

            {link.subText && (
              <span className={`subtext subText-${link.id}`}>
                {link.subText}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Links;
