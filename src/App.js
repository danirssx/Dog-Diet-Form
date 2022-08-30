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
  { id: 'e3', message: "Calculating daily caloric Intake", form: ["Productive", "Lala", "Perro", "Ario"] },
];

function App() {
  const [option, setOption] = useState(INFO_SELECTS)

  const logInfo = () => {
    option.map(e => console.log(e.form.length))
  }

  const optionNum = () => {
    return option.map(e => e.form)
  }

  return (
    <div>
      <Title/>
      <p className="text-center text-2xl pb-2" onClick={logInfo} >🐶</p>
      <FormNew items={option} />
    </div>
  );
}

export default App;
