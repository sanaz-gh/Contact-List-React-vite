import React from "react";
import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.container}>
        <p>
            <a href="https://botostart.ir">botostart </a>| React.js Full course
        </p>
    </div>
  )
}
export default Header;