import { useRef, useState, useEffect } from "react";

const Contact = () => {
  // Form Contol values
  const firstname = useRef();
  const lastname = useRef();
  const email = useRef();
  const message = useRef();

  const [formErrors, setFormErrors] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const name = "Godwin";

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      firstname.current.value = "";
      lastname.current.value = "";
      email.current.value = "";
      message.current.value = "";
    }

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      alert("Message Send successfully");
    }
  }, [formErrors, isSubmit]);

  // Handle form submition

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(isChecked);
    const formData = {
      firstname: firstname.current.value,
      lastname: lastname.current.value,
      email: email.current.value,
      message: message.current.value,
    };

    // If there is error update the formError data
    setFormErrors(validate(formData));

    // Set the form value to an empty string after successfull validation
    setIsSubmit(true);
  };

  // Validate form input
  const validate = (values) => {
    const error = {};
    if (!values.firstname) {
      error.firstname = "First Name is Required";
    }

    if (!values.lastname) {
      error.lastname = "Last Name is Required";
    }

    if (!values.email) {
      error.email = "Email is Required";
    }

    if (!values.message) {
      error.message = "Please enter a message";
    }

    return error;
  };

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
        <form
          onSubmit={handleFormSubmit}
          className="px-6 mb-24 max-w-2xxl md:mx-auto"
        >
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
                className={`${formErrors.firstname ? "border-red-400" : ""}`}
              />
              <span>{formErrors.firstname}</span>
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
                className={`${formErrors.lastname ? "border-red-400" : ""}`}
              />
              <span>{formErrors.lastname}</span>
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
              className={`${formErrors.email ? "border-red-400" : ""}`}
            />
            <span>{formErrors.email}</span>
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
              className={`${formErrors.message ? "border-red-400" : ""}`}
            ></textarea>
            <span>{formErrors.message}</span>
          </div>
          <div className="mb-9 flex items-start justify-center">
            <input
              type="checkbox"
              name="checkbox_agree"
              id="checkbox_agree"
              className="mt-1 border"
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <label htmlFor="checkbox_agree" className="text-sm ml-3">
              You agree to providing your data to {name} Opara who may contact
              you
            </label>
          </div>
          <button
            type="submit"
            id="btn__submit"
            disabled={!isChecked}
            className={`${
              !isChecked ? "bg-blue-300" : "bg-blue-750 border border-blue-750"
            } font-semibold text-base h-12  w-full text-white rounded-xl`}
          >
            Send message
          </button>
        </form>
      </main>
    </>
  );
};

export default Contact;
