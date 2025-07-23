import { useState } from "react";

export default function CheckoutPage({ selectedProducts, cardTotal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleCheckout = () => {
    if (
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !cep.trim() ||
      !address.trim() ||
      !paymentMethod.trim()
    ) {
      alert("Falta informação.");
      return;
    }

    if (selectedProducts.length === 0) {
      alert("Seu carrinho está vazio.");
      return;
    }

    alert("Pedido finalizado com sucesso!");
  };

  return (
    <div className="checkout-page">
      <h2>Finalizar Compra</h2>

      <div className="checkout-summary">
        <h4>Resumo do Pedido</h4>
        <ul>
          {selectedProducts.map((product) => (
            <li key={product.id}>
              <span>{product.name}</span>
              <span>R${product.price}</span>
            </li>
          ))}
        </ul>
        <p>Total: R${cardTotal.toFixed(2)}</p>
      </div>

      <form className="checkout-form">
        <input
          type="text"
          placeholder="Nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
        <input
          type="text"
          placeholder="Endereço de entrega"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <select
          className="select-pagamento"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="">Forma de pagamento</option>
          <option value="credito">Cartão de Crédito</option>
          <option value="debito">Cartão de Débito</option>
          <option value="pix">PIX</option>
          <option value="boleto">Boleto</option>
        </select>

        <button type="button" onClick={handleCheckout}>
          Finalizar Pedido
        </button>
      </form>
    </div>
  );
}
