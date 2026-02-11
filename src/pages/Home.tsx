import style from './Home.module.css';
import FruitsCard from '../components/FruitsCard.tsx';
function Home() {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h2 className={style.title}>Frutas Frescas e Orgânicas Direto para Você</h2>
        <p className={style.description}>Selecionamos as melhores frutas da época para garantir sabor e frescor incomparáveis</p>
      </div>
   
        <FruitsCard />

    </div>
  );
}

export default Home;