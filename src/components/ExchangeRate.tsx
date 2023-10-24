import { observer } from "mobx-react";
import { useState } from "react";
import { tableStore } from "../stores/tableStore";
import "./ExchangeRate.css";

interface ExchangeRateProps {
  currency: string;
}

export const ExchangeRate = observer(({ currency }: ExchangeRateProps) => {
  const [rate, setRate] = useState<number>(tableStore.rate);
  const handleOnChange = (rate: number) => {
    if (!isNaN(rate)) {
      setRate(rate);
    }
  };
  return (
    <div className="exchangeRate-container">
      <p>{currency} = </p>
      <input
        className="no-border"
        type="number"
        value={rate}
        onChange={(e) => handleOnChange(e.target.valueAsNumber)}
        onBlur={() => tableStore.changeRate(rate)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            tableStore.changeRate(rate);
          }
        }}
      ></input>
    </div>
  );
});
