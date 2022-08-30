import React, { useState } from "react";

import Age from "./Age";

const Form = (props) => {
  const [value, useValue] = useState("puppies");

  const FilterValue = (age) => {
    useValue(age);
  };

  return (
    <div className="pb-4">
      <Age
        selected={value}
        onChangeYear={FilterValue}
        message={props.mapping}
        optionNum={props.optionNum}
      />
    </div>
  );
};

export default Form;
