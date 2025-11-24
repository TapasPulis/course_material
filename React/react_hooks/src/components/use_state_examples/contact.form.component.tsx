import React from "react";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  message: "",
};

const ContactFormComponent = () => {
  const [form, setForm] = React.useState(initialState);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };
  return (
    <div>
      <h2>Example object in useState - Contact Form</h2>
      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        value={form.firstname}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        id="lastname"
        name="lastname"
        value={form.lastname}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        id="message"
        value={form.message}
        onChange={handleChange}
      />
      <button onClick={() => console.log("Date to be submitted", form)}>
        {" "}
        Submit
      </button>
    </div>
  );
};

export default ContactFormComponent;
