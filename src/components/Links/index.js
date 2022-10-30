import "./link.css";

const Links = () => {
  const links = [
    {
      id: "twitter",
      name: "Twitter Link",
      url: "https://twitter.com/godwinopara12",
      subText: "",
    },
    {
      id: "btn_zuri",
      name: "Zuri Team",
      url: "https://training.zuri.team/",
    },
    {
      id: "books",
      name: "Zuri Books",
      url: "http://books.zuri.team",
      subText:
        "Look no further on where to get the best books on design and coding",
    },
    {
      id: "book_python",
      name: "Python Books",
      url: "https://books.zuri.team/python-for-beginners?ref_id=godwin",
      subText:
        "Want the best books to help you become a professional python, Look no further.",
    },
    {
      id: "pitch",
      name: "Background Check For Coders",
      url: "https://background.zuri.team",
      subText:
        "Not sure about your programming skills, we can do a background check for you",
    },
    {
      id: "book_desing",
      name: "Design Books",
      url: "https://books.zuri.team/design-rules",
      subText:
        "Get the best design book that will help you create truly professional designs",
    },
  ];
  return (
    <div className="links-wrapper">
      {links.map((link, id) => {
        return (
          <div className={`link ${link.id}`}>
            <a key={id} href={link.url} id={link.id}>
              {link.name}
            </a>

            {link.subText && (
              <span class={`subtext subText-${link.id}`}>{link.subText}</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Links;
