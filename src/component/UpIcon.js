import React, { Component } from "react";

const UpIcon = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        marginBottom: "-34px",
        transform: "translateY(-45px)",
      }}
    >
      <div>
        <img src={props.icon} alt="Go To Start" className="upArrow" />
      </div>
    </div>
  );
};

export default UpIcon;
