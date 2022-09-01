import React, { useState, useId } from "react";
import FontDescription from "../FontStyle";

import Options from "./Options";

const Age = (props) => {
  const [optionValue, setOptionValue] = useState(props.optionNum);

  const logOption = (event) => {
    props.onChangeYear(event.target.value);
  };

  return (
    <section className={`${props.class} container p-8 pt-0 pb-4`}>
      <div className="bg-slate-300 p-4 rounded-full">
        <p className={`${FontDescription()}`}>{props.message}</p>
        <select
          value={props.selected}
          onChange={logOption}
          className="flex m-auto bg-slate-200"
        >
          <Options optionNum={props.optionNum} logNum={optionValue} />
        </select>
      </div>
    </section>
  );
};

export default Age;
