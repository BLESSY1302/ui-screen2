import React from "react";
import Table from "./Table";
import { Button } from "antd";
import "./Table.css"; // Assuming you've organized your components in separate files // {item.ACTIONS}

const Comp = () => {
  const tableData = [
    {
      CATEGORY: "Project configuration",
      CONFIGURATION: "concurent.user.size",
      DISPLAY: "concurent user limit",
      DATATYPE: "Numeric",
      DESCRIPTION:
        "This setting defines the maximum number of concurent user allowed in the system"
    },
    {
      CATEGORY: "Project configuration",
      CONFIGURATION: "database.connection.timeout",
      DISPLAY: "Database connection timeout",
      DATATYPE: "Numeric",
      DESCRIPTION:
        "specifies the time in seconds,for which the application will wait for a database connection before the timeout"
    }
  ];

  return (
    <div>
      <div class="text">
        <h1>APPLICATION CONFIGURATION MANAGEMENT SYSTEM</h1>
        <h2>Welcome,Admin! your gateway to control and manage begins here.</h2>
      </div>
      {/* <a href="">CREATE NEW</a> */}
      {/* <Button id="logout" type="primary" style={{ backgroundColor: "#00008B" }}>
        LOGOUT >
      </Button> */}
       <a href="">CREATE NEW</a>
       <Button id="logout" type="primary" style={{ backgroundColor: "#00008B" }}>
  LOGOUT <span>&gt;</span>
</Button>

      <Button id="logout" type="primary" style={{ backgroundColor: "#00008B" }}>
  LOGOUT <span>&gt;</span>
</Button>



      <div class="right_point"></div>
      <div class="tit"> CONFIGURATION </div>
      <div class="le"> MANAGEMENT </div>

      <Table data={tableData} />
    </div>
  );
};

export default Comp;
