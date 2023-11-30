import React from "react";
import "../css/Contact.css";

const ContactPage = () => {
  return (
    <div className="container">
      <div className="card">
        <form className="form">
          {/* Your form inputs go here */}
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <br />
          {/* Add more form fields as needed */}

          <button type="submit" className="submitButton">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
