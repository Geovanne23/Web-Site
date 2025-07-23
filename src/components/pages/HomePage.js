import React from "react";
import Header from "../Header";
import SidebarCart from "../SidebarCart";
import ExclusiveSection from "../ExclusiveSection";
import TestimonilsList from "../TestimonilsList";
import ProductsList from "../ProductsList";

export default function HomePage({products, addProductToCart}) {
  return (
    <>
      <Header />
      <div className="page-inner-content">
        <div className="section-title">
          <h3>Produtos Selecionados</h3>
          <div className="underline"></div>
        </div>

        <div className="main-content">
          <ProductsList
            addProductToCart={addProductToCart}
            products={products}
          />
        </div>
      </div>
      <ExclusiveSection />
      <TestimonilsList />
    </>
  );
}
