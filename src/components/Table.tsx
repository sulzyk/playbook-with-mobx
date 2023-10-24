import { observer } from "mobx-react";
import { Row } from "./Row";
import { TableHeaders } from "./TableHeaders";
import { tableStore } from "../stores/tableStore";
import { TableFooter } from "./TableFooter";

export const Table = observer(() => {
  return (
    <>
      <TableHeaders></TableHeaders>
      {tableStore.rows.map((row) => (
        <Row
          key={row.id}
          rowData={row}
          onDelete={() => tableStore.deleteRow(row.id)}
        />
      ))}
      <TableFooter />
    </>
  );
});
