import React, { useState } from "react";
import { SummExplain } from "./Componens/SummExplain";
import { ResultSum } from "./Componens/ResultSum";
import { Select } from "./Componens/Select";
import { Bill } from "./Componens/Bill";

function App() {
  const [bill, setBill] = useState(0);
  const [tips1, setTips1] = useState(0);
  const [tips2, setTips2] = useState(0);

  function handleBillInput(e) {
    setBill(e.target.value);
  }

  function handleResetAllFields() {
    setBill(0);
    setTips1(0);
    setTips2(0);
  }

  const tipsCalc = Math.round(bill * ((tips1 + tips2) / 2 / 100));

  return (
    <div className="App">
      <div className="form">
        <h1>Tips calculator</h1>
        <div className="calculator">
          <div className="input-fields">
            <Bill bill={bill} onChangeInputBill={handleBillInput} />
            <div className="current-operand">
              <Select tips={tips1} onSelect={setTips1}>
                How did you like the servise?
              </Select>
              <Select tips={tips2} onSelect={setTips2}>
                How did you friend like the servise?
              </Select>
            </div>

            <button className="clear-btn" onClick={handleResetAllFields}>
              Reset
            </button>
          </div>

          {/* //Display the result */}
          <div className="result">
            <div className="result-label">Pay Check</div>
            <ResultSum bill={bill} tips={tipsCalc} />
            <SummExplain bill={bill} tips={tipsCalc} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
