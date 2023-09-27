import React from "react";
import { Tab, Table, Tabs } from "react-bootstrap";
import styles from "../page.module.css";
export default function DisplayToDoList(props: any) {
  console.log(props.apiData);
  return (
    <>
      {props.apiData !== "" ? (
        <Table
          striped
          bordered
          hover
          variant="dark"
          className="align-middle"
          style={{ marginLeft: "2%" }}
        >
          <thead>
            <tr>
              {props.tableHeading.map((val: any, index: any) => {
                return <th key={index}>{val}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {props.apiData !== ""
              ? props.apiData.map((val: any) => {
                  return (
                    <tr key={val.id}>
                      <td>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">
                              {val.taskTitle}
                              <span className={styles.category}>
                                {val.category}
                              </span>
                            </h5>
                            <p className="card-text">{val.taskDes}</p>
                            <button className="btn btn-primary">Edit</button>
                          </div>
                        </div>
                      </td>
                      <td>{val.status}</td>
                      <td>{val.targetDate === "" ? "-" : val.targetDate}</td>
                      <td>
                        {val.completionDate === "null"
                          ? "-"
                          : val.completionDate}
                      </td>
                    </tr>
                  );
                })
              : "No Task is present in " + props.tab}
          </tbody>
        </Table>
      ) : (
        <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
          No Task is {props.tab === "ALL" ? "Available" : props.tab}
        </h1>
      )}
    </>
  );
}
