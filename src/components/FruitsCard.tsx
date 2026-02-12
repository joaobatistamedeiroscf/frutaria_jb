import { useEffect, useState } from "react";
import style from "./FruitsCard.module.css";
import { supabase } from "../lib/supabase";

interface Fruit {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

function FruitsCard() {
  const [fruits, setFruits] = useState<Fruit[]>([]);

  useEffect(() => {
    const fetchFruits = async () => {
      const { data: fruits, error } = await supabase.from("fruits").select("*");

      if (error) {
        console.error("Erro ao buscar frutas:", error);
      } else {
        setFruits(fruits || []);
      }
    };

    fetchFruits();
  }, []);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h2 className={style.title}>Frutas Cadastradas: </h2>
      </div>
      <div className={style.fruitContainer}>
        <ul className={style.fruitList}>
          {fruits.map(
            (fruit: {
              id: string;
              name: string;
              price: number;
              description: string;
              image: string;
            }) => (
              <li className={style.fruitItem} key={fruit.id}>
                {fruit.image && (
                  <img
                    className={style.fruitImage}
                    src={fruit.image}
                    alt={fruit.name}
                  />
                )}
                <div className={style.fruitInfo}>
                  {fruit.name}
                  <br />
                  Preço: R${fruit.price.toFixed(2)}
                  {fruit.description && (
                    <p className={style.fruitDescription}>
                      {fruit.description}
                    </p>
                  )}
                  <div className={style.buttonContainer}>
                    <button className={style.addButton}>Comprar</button>
                  </div>
                </div>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}

export default FruitsCard;
