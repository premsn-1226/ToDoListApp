import React, { useEffect, useState } from "react";
import { Card, Nav, Tab, Tabs } from "react-bootstrap";
import DisplayToDoList from "./DisplayToDoList";
import styles from "../page.module.css";
import Api from "../Services/Api";

export default function NavigationPanel(props: any) {
  const [tab, setTab] = useState("ALL");
  console.log(tab);
  var data = "";
  const [apiData, setApiData] = useState("");
  const [color, setColor] = useState("");

  const fecthData = async () => {
    data = await Api.getStatus();
    setApiData(data);
    console.log(data);
  };

  const fecthDataByStatus = async () => {
    data = await Api.getStatusByType(tab.toLowerCase().replaceAll(" ", ""));
    setApiData(data);
    console.log(data);
  };
  useEffect(() => {
    if (tab === "ALL") {
      fecthData();
      setColor("#707f69");
    } else {
      fecthDataByStatus();
      setColor("#09f563c2");
    }
    console.log(color);
  }, [tab, color]);
  return (
    <div className={styles.carddiv}>
      <Card
        className={styles.card}
        style={{ backgroundColor: `${color} !important` }}
      >
        <Tabs
          id="uncontrolled-tab-example"
          className="mb-1"
          activeKey={tab}
          onSelect={(k: any) => setTab(k)}
          fill
          justify
        >
          {props.listOfNav.map((val: any) => {
            return (
              <Tab title={val} key={val} eventKey={val} className={styles.task}>
                <DisplayToDoList
                  tableHeading={props.heading}
                  apiData={apiData}
                  tab={tab}
                ></DisplayToDoList>
              </Tab>
            );
          })}
        </Tabs>
      </Card>
    </div>
  );
}
