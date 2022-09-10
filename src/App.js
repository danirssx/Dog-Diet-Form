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
  const [boolean, setBoolean] = useState(true);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  const FEED = {
    id: "feed",
    message: "Calculate how much to feed daily",
    form: "",
  };

  const [objectFeed, setObjectFeed] = useState(FEED);

  const objectAdd = (props) => {
    setObjectFeed(
      Object.assign(objectFeed, {
        form: !boolean
          ? ["Inactive", "Average", "Active", "Athlete"]
          : [
              "2-4 months",
              "4-6 months",
              "6-8 months",
              "8-12 months",
              "12-24 months",
            ],
      })
    );
  };

  const booleanFunction = (value) => {
    setBoolean(value);
    objectAdd();
  };

  const addOptionHandler = () => {
    const array = [...option, objectFeed];    

    return setOption((newOption) => {
      return [...option, objectFeed];
    });
  };

  return ( 
    <div>
      <Title />
      <p className="text-center text-2xl pb-2" onClick={addOptionHandler}>
        🐶
      </p>
      <FormNew
        items={option}
        addOption={addOptionHandler}
        booleanHandler={booleanFunction}
      />
    </div>
  );
}

export default App;
