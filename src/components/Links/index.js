import { linksData } from "../../data/linkData";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="links-wrapper">
      {linksData.map((link, id) => {
        return (
          <div key={id} className={`relative ${link.id}`}>
            <a className="btn__link" href={link.url} id={link.id}>
              {link.name}
            </a>

            {link.subText && (
              <span
                className={`absolute -bottom-9 w-full text-center bg-gray-300 mb-2 text-sm hidden cursor-pointer text-gray-900 py-1 subtext subText-${link.id}`}
              >
                {link.subText}
              </span>
            )}
          </div>
        );
      })}
      <Link to={"/contact"} className="btn__link" id="contact">
        Contact Me
      </Link>
    </div>
  );
};

export default Links;
