import { useState, useEffect } from "react";
import axios from "axios";
import "./Main.css";

function Main() {
  const [info, setInfo] = useState([]);

  const pegarDados = async () => {
    const dados = await axios.get("https://fakestoreapi.com/products");
    setInfo(dados.data);
    console.log(dados.data);
  };

  useEffect(() => {
    pegarDados();
  }, []);

  // FILTER ELETRÔNICOS
  const filtrarEletronicos = info.filter(
    (item) => item.category === "electronics"
  );

  // FILTER ROUPAS FEMININAS
  const filtrarRoupas = info.filter(
    (item) => item.category === "women's clothing"
  );

  return (
    <main className="main">
      <section className="products-container">

        {/* ----- Eletrônicos ----- */}

        {filtrarEletronicos.map((item) => (
          <article className="product-card" key={item.id}>
            <img
              className="product-image"
              src={item.image}
              alt={item.title}
            />

            <div className="product-content">
              <h2 className="product-title">{item.title}</h2>
              <p className="product-price">R$ {item.price}</p>
            </div>
          </article>
        ))}

        {/* ----- Roupas ----- */}

        {filtrarRoupas.map((item) => (
          <article className="product-card" key={item.id}>
            <img
              className="product-image"
              src={item.image}
              alt={item.title}
            />

            <div className="product-content">
              <h2 className="product-title">{item.title}</h2>
              <p className="product-price">R$ {item.price}</p>
            </div>
          </article>
        ))}

      </section>
    </main>
  );
}

export default Main;