import styles from "./Footer.module.css"

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.section}>
            <h3 className={styles.title}>Buy n Large</h3>
            <p className={styles.text}>Empresa de comercio Electrónico</p>
          </div>
        </div>

        <div className={styles.bottomText}>
          <p>© {new Date().getFullYear()} Buy n Large. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
