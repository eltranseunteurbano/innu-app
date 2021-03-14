import React from "react";
import TextField from "../../components/TextField/TextField";
import Chips from "../../components/Chips/Chips";

const Prueba = () => {
  return (
    <div>
      <TextField
        label="Label"
        placeholder="Placeholder"
        fullWidth
        className="m-2"
      />
      <Chips label="Prueba chip" />
    </div>
  );
};

export default Prueba;
