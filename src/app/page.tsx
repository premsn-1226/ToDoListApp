"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import ToDoListForm from "./Components/ToDoListForm";
import NavigationPanel from "./Components/NavigationPanel";
import Api from "./Services/Api";

export default function Home() {
  const [show, setShow] = useState(false);
  const listOfNav = ["ALL", "YET TO START", "IN PROGRESS", "COMPLETED"];
  const tableHeading = ["Task List", "Status", "Target Date", "Completed Date"];
  var data: any;
  const [apiData, setApiData] = useState("");

  // const apiData = [
  //   {
  //     id: 1,
  //     title: "Special title treatment",
  //     description:
  //       "With supporting text below as a natural lead-in to additional content",
  //     status: "Completed",
  //     targetDate: "12-07-2023",
  //     completedDate: "07-07-2023",
  //     category: "Design",
  //   },
  //   {
  //     id: 2,
  //     title: "Special treatment",
  //     description: "With supporting text below as a natural",
  //     status: "In Progress",
  //     targetDate: "12-08-2023",
  //     completedDate: "",
  //     category: "Test",
  //   },
  //   {
  //     id: 3,
  //     title: "title treatment",
  //     description: "lead-in to additional content",
  //     status: "Need to Start",
  //     targetDate: "",
  //     completedDate: "",
  //     category: "Deploy",
  //   },
  // ];
  const handleClose = () => setShow(false);
  const handleOpen = () => {
    setShow(true);
  };

  return (
    <>
      <main className={styles.main}>
        <Header onChange={handleOpen}></Header>

        <ToDoListForm close={handleClose} show={show}></ToDoListForm>
      </main>
      <NavigationPanel
        listOfNav={listOfNav}
        heading={tableHeading}
      ></NavigationPanel>
    </>
  );
}
