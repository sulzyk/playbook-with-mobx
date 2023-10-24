import React from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Table } from "./components/Table";
import { ExchangeRate } from "./components/ExchangeRate";

function App() {
  return (
    <div className="app-layout">
      <div className="title-rate-container">
        <h1>List of expenses</h1>
        <ExchangeRate currency="EUR" />
      </div>
      <Form />
      <Table />
    </div>
  );
}

export default App;
