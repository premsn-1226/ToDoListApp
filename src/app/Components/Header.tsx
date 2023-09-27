import React from "react";
import styles from '../page.module.css';
export default function Header(props: any) {
  return (
    <>
      <div className={styles.subdescription}>
        <h1>Welcome Back, Prem</h1>
        <button
          type="button"
          onClick={() => props.onChange()}
          className="btn btn-outline-primary btn-lg"
        >
          Add Task
        </button>
      </div>
      <div className={styles.description}>
        <p>You&apos;ve got 1 tasks coming up in next days.</p>
      </div>
    </>
  );
}
