import React from "react";
import Form from "./Form/Form";

import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <div>
        <h1>Contato</h1>
        <p>Deixe sua mensagem que entraremos em contato com você</p>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
