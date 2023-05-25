"use client";
import styles from "./style.module.css";

const Button = () => {
  // The console.log below is enough to trigger the bug
  console.log(styles)
  return <button onClick={() => alert("boop")}>Boop</button>;
};
export default Button
