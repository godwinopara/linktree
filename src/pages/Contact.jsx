const Contact = () => {
  return (
    <header>
      <main>
        <form action="">
          <div>
            <div>
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                name="firstname"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                name="lastname"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="youremail@email.com"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Send me message and I will reply as soon as possible"
            ></textarea>
          </div>
        </form>
      </main>
    </header>
  );
};

export default Contact;
