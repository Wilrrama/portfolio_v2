import React, { useState } from "react";
import { StyledContact } from "./style";
import "boxicons/css/boxicons.min.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    assunto: "",
    message: "",
  });

  const [result, setResult] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Enviando...");
    setSubmitted(true);

    const formPayload = new FormData();
    formPayload.append("access_key", "34fdbc49-f9ef-45bf-91d0-efd951b00ebc");
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("assunto", formData.assunto);
    formPayload.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Formulário enviado com sucesso!");
        setFormData({
          name: "",
          email: "",
          assunto: "",
          message: "",
        });
      } else {
        console.error("Erro no envio:", data);
        setResult(`Erro: ${data.message}`);
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      setResult("Erro ao enviar. Tente novamente mais tarde.");
    } finally {
      setSubmitted(false);
    }
  };

  return (
    <StyledContact id="contato">
      <h1>Entre em Contato</h1>
      <p>Ficarei feliz em receber sua mensagem!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          placeholder="Seu nome"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="seu@email.com"
          required
        />
        <label htmlFor="assunto">Assunto</label>
        <input
          id="assunto"
          name="assunto"
          value={formData.assunto}
          onChange={handleChange}
          type="text"
          placeholder="Assunto da mensagem"
          required
        />
        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Digite sua mensagem aqui"
          required
        />
        <button type="submit" disabled={submitted}>
          {submitted ? "Enviando..." : "Enviar Mensagem"}
          <span>
            <i className="bx bxs-right-top-arrow-circle"></i>
          </span>
        </button>
      </form>
      {/* {result && <p style={{ marginTop: "10px", color: "green" }}>{result}</p>} */}
    </StyledContact>
  );
}

export default Contact;
