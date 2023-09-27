import axios from "axios";
import React from "react";

export default class Api {
  // static API_URL =
  //   "https://todolistappproduction.azurewebsites.net/api/v1/todolist";
  static API_URL = "http://localhost:8080/api/v1/todolist";

  static async api(url: any, options: any, data?: any) {
    return await fetch(url, {
      method: options,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: data,
    });
  }
  static async apiGet(url: any, options: any, data?: any) {
    return await fetch(url, { method: options });
  }

  static getStatusByType(status: String) {
    return Api.apiGet(`${this.API_URL}/getStatus?status=${status}`, "GET").then(
      (response) => response.json()
    );
  }

  static getStatus() {
    return Api.apiGet(`${this.API_URL}/getTaskList`, "GET").then((response) =>
      response.json()
    );
  }

  static AddTask(data: any) {
    return Api.api(`${this.API_URL}/addTask`, "POST", data).then((response) =>
      response.json()
    );
  }
}
