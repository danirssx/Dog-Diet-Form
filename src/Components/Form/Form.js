import React, { useState } from "react";

import Age from "./Age";

const Form = (props) => {
  const [value, useValue] = useState("");
  const [click, setClick] = useState(false)
  const [int, setInt] = useState(0)


  const FilterValue = (age) => {
    setInt(prev => {
      return ++prev;
  })

    useValue(age);

    if(age === 'Adult' || age === 'Puppie') {
      setClick(true);
      if (int < 1) {
        props.add();
      }
    }
  };

  return (
    <div className="pb-4">
      <Age
        add={props.add}
        selected={value}
        onChangeYear={FilterValue}
        message={props.mapping}
        id={props.id}
        optionNum={props.optionNum}
        booleanHandler={props.booleanHandler}
      />
    </div>
  );
};

export default Form;
