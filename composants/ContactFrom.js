// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
require("dotenv").config();

function ContactForm() {
  const formId = String(process.env.FORM_ID);
  const [state, handleSubmit] = useForm(formId);
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form className="formContact" onSubmit={handleSubmit}>
      <label htmlFor="email">Votre addresse mail</label>
      <input id="email" type="email" name="email" required="required" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Votre message</label>
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
export default ContactForm;
