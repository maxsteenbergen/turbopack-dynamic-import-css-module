import { ReactNode } from "react";
import "ui/constants/tokens.css"
import "ui/constants/globals.css";
import styles from "./layout.module.css"

export default function RootLayout({ children }: { children: ReactNode; }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <menu className={styles.menu} />
        <main className={styles.main}>
          <header className={styles.header} />
          {children}
        </main>
      </body>
    </html>
  );
}
