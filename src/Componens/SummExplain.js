import React from "react";

export function SummExplain({ bill, tips }) {
  return (
    <>
      <div className="explain">
        Sum of the bill ${bill} and tips ${tips}{" "}
      </div>
    </>
  );
}
