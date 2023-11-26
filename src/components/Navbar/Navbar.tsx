import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.header}>
        <div className={styles.desktopMenu}>
          <div className={styles.headerLinks}>
            <a className={styles.navLinks}>Interview guides</a>
            <a className={styles.navLinks}>Pricing</a>
            <a className={styles.navLinks}>Company</a>
            <a className={styles.navLinks}>Blog</a>
            <a className={styles.navLinks}>Careers</a>
          </div>
          <div className={styles.headerForm}>
            <a className={styles.signLink}>Sign In</a>
            <a className={styles.signUpLink}>Sign Up</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
