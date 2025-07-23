import React from "react";

export default function ProductsPage({ products }) {
  return (
    <div className="page-inner-content">
      <div className="section-title">
        <h3>Nossos Produtos</h3>
        <div className="underline"></div>
      </div>

      <div className="main-content">
        <ProductsPage products={products} />
      </div>
    </div>
  );
}
