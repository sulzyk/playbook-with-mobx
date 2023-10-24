import { makeObservable, observable, action, computed } from "mobx";
import { RowData } from "../types";

class TableStoreClass {
  rows: RowData[] = [];
  lastId: number = 0;
  rate: number = 4.23;

  constructor() {
    makeObservable(this, {
      rows: observable,
      rate: observable,
      addRow: action,
      deleteRow: action,
      changeRate: action,
      totalAmount: computed,
      totalAmountEur: computed,
    });
  }

  addRow(row: RowData) {
    this.rows.push({
      ...row,
      id: ++this.lastId,
      amountEur: parseFloat((row.amount * this.rate).toFixed(2)),
    });
  }

  deleteRow(id: number) {
    const index = this.rows.findIndex(({ id: rowId }) => rowId === id);
    if (index !== -1) {
      this.rows.splice(index, 1);
    }
  }

  changeRate(rate: number) {
    this.rate = rate;
    this.rows.forEach((row) => {
      row.amountEur = parseFloat((row.amount * this.rate).toFixed(2));
    });
  }

  get totalAmount() {
    return parseFloat(
      this.rows.reduce((total, row) => total + row.amount, 0).toFixed(2)
    );
  }

  get totalAmountEur() {
    return parseFloat(
      this.rows.reduce((total, row) => total + row.amountEur, 0).toFixed(2)
    );
  }
}

export const tableStore = new TableStoreClass();
