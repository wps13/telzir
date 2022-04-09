import React from "react"
import FormItem from "./FormItem/FormItem"

import "./Form.scss"

const Form = () => (
  <form data-testid="form" className="contact__form">
    <FormItem labelText="Nome" type="text" />
    <FormItem labelText="Email" type="email" />
    <FormItem labelText="Mensagem" type="text" />
    <button type="submit" data-testid="form__button">
      Enviar
    </button>
  </form>
)
export default Form
