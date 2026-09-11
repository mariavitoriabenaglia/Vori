import {useState, useEffect} from "react";
import axios from "axios";
import "./global.css";

function App() {
  const [info, setInfo] = useState([]);

  const pegarDados = async () => {
    const dados = await axios.get('https://fakestoreapi.com/products');
    setInfo (dados.data)
  };

useEffect(() => {
  pegarDados();
}, []);

  return (
  <main>
    <h1> Vori </h1>
    {
      info.map((item)=>(
        <article key={item.id}>
          <img src={item.image} alt={item.tittle} />
          <h2> {item.title} </h2>
          <p> R$ {item.price} </p>
        </article>
      ))
    }


  </main> 
)


}

export default App;
