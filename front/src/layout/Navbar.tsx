import React from "react";
// import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export const NavBar: React.FC = () => {
  return (
    <>
      <header className={styles.navbar}>
       <div className={styles.container}>
         {/* Logo */}
         <a href="/" className={styles.logo}>
           TiendaShop
         </a>

         {/* Menú principal */}
         <nav className={styles.nav}>
           <ul>
             <li>
               <a href="/">Inicio</a>
             </li>
           </ul>
         </nav>
       </div>
     </header>
    </>
  );
};

export default NavBar;
