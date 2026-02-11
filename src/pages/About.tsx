import style from './About.module.css';

function About() {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h1 className={style.title}>Sobre o projeto</h1>
      </div>
      <div className={style.main}>
        <div className={style.content}>
          <p className={style.description}>Um simples projeto web desenvolvido em React para cadastro de frutas, 
           <br />de forma a exercitar conceitos de estado, formulários e validação.</p>
        </div>
        <div className={style.imageContainer}>
          <img className={style.image} src="/inozuke_frutas.png" alt="Inozuke com frutas" />
        </div>

      </div>
        
       
    </div>
  );
}

export default About;