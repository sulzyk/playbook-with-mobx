import { observer } from "mobx-react";
import "./Form.css";
import { tableStore } from "../stores/tableStore";
import { useState } from "react";
import { RowData } from "../types";

export const Form = observer(() => {
  const initialRowDate: RowData = {
    id: 0,
    title: "",
    amount: 0,
    amountEur: 0,
  };
  const [row, setRow] = useState<RowData>(initialRowDate);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    tableStore.addRow(row);
    setRow(initialRowDate);
  };
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <p>Title of transaction</p>
      <input
        minLength={5}
        required
        value={row.title}
        onChange={(e) => setRow({ ...row, title: e.target.value })}
      ></input>
      <div></div>
      <p>Amount (in PLN)</p>
      <input
        type="number"
        required
        value={isNaN(row.amount) ? "" : row.amount}
        onChange={(e) => {
          setRow({
            ...row,
            amount: parseFloat(e.target.valueAsNumber.toFixed(2)),
          });
        }}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
});
