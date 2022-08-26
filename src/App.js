import React, { useState } from "react";

import "./App.css";
import "./Components/Title";

import Title from "./Components/Title";
import Form from "./Components/Form/Form";

const INFO_SELECTS = [
  {
    message: "Age of the Dog (Puppies-max =< 24-months)",
    form: ["Puppie", "Adult"],
  },
  { message: "Calculate how much to feed daily", form: ["Inactive", "Average", "Active", "Athlete"] },
];

function App() {
  const [option, setOption] = useState(INFO_SELECTS)

  const logInfo = (props) => {
    return console.log(option)
  }

  return (
    <div>
      <Title/>
      <p className="text-center text-2xl pb-2" onClick={logInfo} >🐶</p>
      <Form />
    </div>
  );
}

export default App;
