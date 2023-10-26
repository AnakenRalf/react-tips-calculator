import React from "react";

export function Bill({ bill, onChangeInputBill }) {
  return (
    <>
      <div className="spended">How mutch do you spend?</div>
      <input
        type="number"
        className="input"
        placeholder="paycheck is..."
        step="1"
        value={bill}
        onChange={onChangeInputBill}
      />
    </>
  );
}
