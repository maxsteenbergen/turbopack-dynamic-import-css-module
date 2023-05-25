import { ComponentType, createElement, FC } from "react";
import styles from "./style.module.css";

interface TComponentSandbox {
  component: ComponentType;
  controls: any;
  className?: string; 
}

export const ComponentSandbox: FC<TComponentSandbox> = ({ component, controls, className }) => {
  // console.log({controls})
  return (
    <div className={`${styles.column} ${className}`}>
      <div className={styles.preview}>
        {createElement(component, {})}
      </div>
      <div className={styles.menu}>
        {/*{createElement(component, {})}*/}
      </div>
    </div>
  )
}