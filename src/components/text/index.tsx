import React from "react";

import styles from "./styles.module.scss";

const Text = ({ text }: { text: string }) => {
  return <p className={styles.text}>{text}</p>;
};

export default Text;
