import React from "react";
import styles from "./footer.module.scss";
import { useAppStore } from 'store/useApp';

const Footer = () => {
  const { mode } = useAppStore();
  return <div className={mode === 'dark' ? styles.footerWrapperDarkMode : styles.footerWrapper}>
    <div> Copyright © 2023 EdwardHa. All rights reserved. </div>
    <div>React Code Base</div>
  </div>;
};

export default Footer;
