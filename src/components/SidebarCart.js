import { faChevronRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SidebarProduct from "./SidebarProduct";
import { Link } from "react-router-dom";

export default function SidebarCart({
  setShowSidebarCart,
  showSidebarCart,
  selectedProducts,
  cardTotal,
  removeProductFromCart,
  addToCardTotal,
}) {
  return (
    <aside className={`sidebar-cart ${showSidebarCart && "show"}`}>
      <div className="top">
        <h3>Seu Carrinho</h3>
        <button onClick={() => setShowSidebarCart(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <div className="sidebar-products-list">
        {selectedProducts.map((product) => (
          <SidebarProduct
            key={product.id}
            {...product}
            removeProductFromCart={removeProductFromCart}
            addToCardTotal={addToCardTotal}
          />
        ))}
      </div>

      {cardTotal === 0 ? <i>Seu Carrinho está vazio</i> : <>

      <div className="total-container">
        <b>Total:</b> {cardTotal} Reais
      </div>
      <Link to="/cart/checkout" className="btn-icon">
        <span>Pagar Agora</span>
        <FontAwesomeIcon icon={faChevronRight} />
      </Link>
      </>}


    </aside>
  );
}
