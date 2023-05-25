import {FC, ReactElement, ReactNode} from "react";
import styles from "./style.module.css";

interface TMarkdownRenderer {
  children: ReactElement;
  className?: string;
}

export const MarkdownRenderer: FC<TMarkdownRenderer> = ({ children, className}) => {
  return <article className={`${styles.article} ${className}`} >
    {children}
  </article>
    
}