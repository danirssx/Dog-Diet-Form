import React, { useState } from "react";

import Form from "./Form";

const FormNew = (props) => {
  let arrayNum = [];

  return (
    <section>
      {props.items.map((list) => {
        return (
          <Form
            key={list.id}
            id={list.id}
            mapping={list.message}
            optionNum={list.form}
            add={props.addOption}
          />
        );
      })}
      {console.log(arrayNum)}
    </section>
  );
};

export default FormNew;
