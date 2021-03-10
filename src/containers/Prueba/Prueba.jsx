import React from "react";
import Button from "../../components/Button/Button";
import { AccessAlarm } from "@material-ui/icons";

const Prueba = () => {
  return (
    <div>
      <Button color="grey" variant="contained" className="m-2">
        Label
      </Button>
      <Button color="grey" variant="contained" endIcon={<AccessAlarm />}>
        Label
      </Button>
    </div>
  );
};

export default Prueba;
