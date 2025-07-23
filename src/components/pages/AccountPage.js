import React, { useState } from "react";

export default function AccountPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSave = () => {
    if (!name.trim() || !email.trim()) {
      alert("Por favor, preencha nome e email.");
      return;
    }
    alert("Dados salvos com sucesso!");
    // Aqui poderia salvar em API, localStorage, etc.
  };

  return (
    <div className="account-page">
      <h1>Minha Conta</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
      >
        <label>
          Nome Completo:
          <input
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Telefone:
          <input
            type="tel"
            placeholder="(99) 99999-9999"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
