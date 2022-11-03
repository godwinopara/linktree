import { useRef } from "react";

const Contact = () => {
  const firstname = useRef();
  const lastname = useRef();
  const email = useRef();
  const message = useRef();
  const name = "Godwin";

  return (
    <>
      <header className="pt-24 px-6 mb-12 max-w-2xxl md:mx-auto">
        <div>
          <h1 className="text-4xl font-semibold mb-6">Contact Me</h1>
          <p className="text-lg">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </div>
      </header>
      <main>
        <form className="px-6 mb-24 max-w-2xxl md:mx-auto">
          <div className="md:flex md:justify-between">
            <div className="flex flex-col mb-9 md:w-full md:mr-6">
              <label htmlFor="firstname" className="">
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                placeholder="Enter your first name"
                id="first_name"
                ref={firstname}
              />
            </div>
            <div className="flex flex-col mb-9 md:w-full">
              <label htmlFor="lastname" className="">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                placeholder="Enter your last name"
                id="last_name"
                ref={lastname}
              />
            </div>
          </div>
          <div className="flex flex-col mb-9">
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="youremail@email.com"
              ref={email}
            />
          </div>
          <div className="flex flex-col mb-9">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Send me message and I will reply as soon as possible"
              ref={message}
            ></textarea>
          </div>
          <div className="mb-9 flex items-start justify-center">
            <input
              type="checkbox"
              name="checkbox_agree"
              id="checkbox_agree"
              className="mt-1 border"
            />
            <label htmlFor="checkbox_agree" className="text-sm ml-3">
              You agree to providing your data to {name} Opara who may contact
              you
            </label>
          </div>
          <button
            type="submit"
            id="btn__submit"
            className="bg-blue-750 border border-blue-750 font-semibold text-base h-12  w-full text-white rounded-xl"
          >
            Send message
          </button>
        </form>
      </main>
    </>
  );
};

export default Contact;
