import { useState } from "react";
import { StyledContact } from "./style";
import "boxicons/css/boxicons.min.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    assunto: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Dados do formulário", formData);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        assunto: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <StyledContact id="contato">
      <h1>Entre em Contato</h1>
      <p>Ficarei feliz em receber sua mensagem!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nome</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          placeholder="Seu nome"
          required
        />
        <label htmlFor="">Email</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="seu@email.com"
        />
        <label htmlFor="">Assunto</label>
        <input
          name="assunto"
          value={formData.assunto}
          onChange={handleChange}
          type="text"
          placeholder="Assunto da mensagem"
        />
        <label htmlFor="">Mensagem</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Digite sua mensagem aqui"
        />
        <button type="submit" disabled={submitted}>
          Enviar Mensagem
          <span>
            <i className="bx bxs-right-top-arrow-circle"></i>
          </span>
        </button>
      </form>
    </StyledContact>
  );
}
export default Contact;
