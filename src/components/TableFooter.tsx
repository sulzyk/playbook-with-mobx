import { observer } from "mobx-react";
import { tableStore } from "../stores/tableStore";
import "./TableFooter.css";

export const TableFooter = observer(() => {
  return (
    <div className="footer-container">
      <p>
        Sum: {tableStore.totalAmount} PLN ({tableStore.totalAmountEur} EUR)
      </p>
    </div>
  );
});
