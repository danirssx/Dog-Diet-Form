import React, { useState } from "react";

import Form from "./Form";

const FormNew = (props) => {
  return (
    <section>
      {props.items.map((list) => {
        return (
            <Form 
            key={list.id}
            mapping={list.message} 
            />
        )
      })}
    </section>
  );
};

export default FormNew;