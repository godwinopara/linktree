import "./index.css";

function App() {
  const links = [
    {
      id: "twitter",
      name: "Twitter Link",
      url: "https://twitter.com/godwinopara12",
    },
    { id: "btn_zuri", name: "Zuri Team", url: "https://training.zuri.team/" },
    { id: "books", name: "Zuri Books", url: "http://books.zuri.team" },
    {
      id: "book_python",
      name: "Python Books",
      url: "https://books.zuri.team/",
    },
    {
      id: "pitch",
      name: "Background Check For Coders",
      url: "https://background.zuri.team",
    },
    {
      id: "book_desing",
      name: "Design Books",
      url: "https://books.zuri.team/design-rules",
    },
  ];

  return (
    <div className="content_wrapper">
      <div className="profile"></div>
      <div className="links-wrapper">
        {links.map((link, id) => {
          return <a key={id} href={link.url}>{link.name}</a>;
        })}
      </div>
    </div>
  );
}

export default App;
