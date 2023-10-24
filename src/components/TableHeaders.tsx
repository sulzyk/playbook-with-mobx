import "./Table.css";

export const TableHeaders = () => {
  return (
    <div className="grid">
      <div className="header">Title</div>
      <div className="header">Amount(PLN)</div>
      <div className="header">Amount (EUR)</div>
      <div className="header">Options</div>
    </div>
  );
};
