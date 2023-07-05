"use client";
import styles from "./page.module.css";
import { useState } from "react";
import MyTheme from "./MyTheme";
import MyButton from "./MyButton";
export default function Home() {
  const [change, setChange] = useState(true);
  const [color, setColor] = useState("blue");
  const [theme, setTheme] = useState("black");
  const changeColor = () => {
    setChange(!change);
    if (change) {
      setColor("blue");
    } else {
      setColor("red");
    }
  };

  const changeTheme = () => {
    if (theme === "black") {
      setTheme("white");
    } else {
      setTheme("black");
    }
  };
  return (
    <main style={{ background: theme }} className={styles.main}>
      <div>
        <h1 style={{ color: color }}>Welcome to my app</h1>
        <MyButton changeColor={changeColor} color={color} />
        <MyTheme changeTheme={changeTheme} theme={theme} />
      </div>
    </main>
  );
}
