import React, { useState } from "react";

import "./App.css";
import "./Components/Title";

import Title from "./Components/Title";
import Form from "./Components/Form/Form";
import FormNew from "./Components/Form/FormNew";

const INFO_SELECTS = [
  {
    id: 'e1',
    message: "Age of the Dog (Puppies-max =< 24-months)",
    form: ["Puppie", "Adult"],
  },
  { id: 'e2', message: "Calculate how much to feed daily", form: ["Inactive", "Average", "Active", "Athlete"] },
  { id: 'e3', message: "Calculating daily caloric Intake", form: ["Inactive", "Average", "Active", "Athlete"] },
];

function App() {
  const [option, setOption] = useState(INFO_SELECTS)

  const logInfo = (message) => {
    setOption((e) => {
      return e;
    })
  }

  console.log(option)

  return (
    <div>
      <Title/>
      <p className="text-center text-2xl pb-2" onClick={logInfo} >🐶</p>
      <FormNew items={option} />
    </div>
  );
}

export default App;
