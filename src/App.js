import React, { useState } from "react";

import "./App.css";
import "./Components/Title";

import Title from "./Components/Title";
import FormNew from "./Components/Form/FormNew";

const INFO_SELECTS = [
  {
    id: "age",
    message: "Age of the Dog (Puppies-max =< 24-months)",
    form: ["Adult", "Puppie"],
  },
];

function App() {
  const [option, setOption] = useState(INFO_SELECTS);

  const feedDaily = {
    id: "feed",
    message: "Calculate how much to feed daily",
    form: ["Inactive", "Average", "Active", "Athlete"],
    form2: ["2-4 months", "4-6 months", "6-8 months", "8-12 months", "12-24 months"],
  };

  const addOptionHandler = () => {
    setOption(newOption => {
      return [...option, feedDaily]
    })
  }

  return (
    <div>
      <Title />
      <p className="text-center text-2xl pb-2" onClick={addOptionHandler}>
        🐶
      </p>
      <FormNew items={option} addOption={addOptionHandler}/>
    </div>
  );
}

export default App;
