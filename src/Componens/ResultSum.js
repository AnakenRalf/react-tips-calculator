import React from "react";

export function ResultSum({ bill, tips }) {
  return (
    <>
      <div className="pay-check">{Number(bill) + Number(tips)}</div>
    </>
  );
}
