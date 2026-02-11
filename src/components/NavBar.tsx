import { Link } from "react-router-dom";
import style from './NavBar.module.css';

function NavBar() {
  return (
    <div className={style.navbar}>
        
        <div className={style.logo_container}>
            <img className = {style.logo} src="/logo_frutaria.png" alt="Logo Frutaria JB" /> 
            <h2 className= {style.title}>Frutaria JB</h2>
        </div>
        
        <ul className = {style.list}>
            <Link className={style.link} to="/">
                <li>Home</li>
            </Link>
            <Link className={style.link} to="/about">
                <li>Sobre</li>
            </Link>
            <Link className={style.link} to="/register">
            <li>Cadastro</li></Link>
        </ul>
      
    </div>
  );
}

export default NavBar;