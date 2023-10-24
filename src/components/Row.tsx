import { observer } from "mobx-react";
import { RowData } from "../types";
import "./Table.css";

interface RowProps {
  rowData: RowData;
  onDelete: () => void;
}

export const Row = observer(({ rowData, onDelete }: RowProps) => {
  return (
    <div className="grid">
      <div className="cell">{rowData.title}</div>
      <div className="cell">{rowData.amount}</div>
      <div className="cell">{rowData.amountEur}</div>
      <button className="cell" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
});
