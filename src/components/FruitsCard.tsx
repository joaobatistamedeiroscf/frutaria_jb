import { useEffect,useState } from "react";
import style from "./FruitsCard.module.css"

function FruitsCard() {
  const [fruits , setFruits] = useState([]); 

  useEffect(() => {
    fetch("http://localhost:3000/fruits")
    .then((response) => response.json())
    .then((data) => setFruits(data))
    .catch((error) => console.error("Erro ao buscar frutas:", error));
  }, []);

  return (
    <div className={style.container}>
      <div className={style.header}>
         <h2 className = {style.title}>Frutas Cadastradas: </h2>
      </div>
        <div className={style.fruitContainer}>
          <ul className={style.fruitList}>
              {fruits.map((fruit: { id: string, name: string; price: number , description: string , image:string}) => (
                <li className={style.fruitItem} key={fruit.id}>
                 {fruit.image && <img className={style.fruitImage} src={fruit.image} alt={fruit.name} />}
                  <div className={style.fruitInfo}>
                     {fruit.name}  
                      <br />
                      Preço: R${fruit.price.toFixed(2)}
                      {fruit.description && <p className={style.fruitDescription}>{fruit.description}</p>}
                      <div className={style.buttonContainer}>
                        <button className={style.addButton}>Comprar</button>
                      </div>
                </div>
                </li>
              ))}
          </ul>
        </div>
     

      
    </div>
  );
}

export default FruitsCard;