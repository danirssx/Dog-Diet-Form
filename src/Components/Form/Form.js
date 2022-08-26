import React, { useState } from "react";

import Age from "./Age";

const Form = (props) => {
  const [value, useValue] = useState("puppies");

  const FilterValue = (age) => {
    useValue(age);
  };

  const logValue = () => {
    console.log(value);
  };

  return (
    <section>
      <div>
        <Age selected={value} onChangeYear={FilterValue} logging={logValue} />
      </div>
    </section>
  );
};

export default Form;
