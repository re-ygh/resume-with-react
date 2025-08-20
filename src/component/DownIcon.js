import React, { Component } from "react";

const DownIcon = (props) => {
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
        <img src={props.icon} alt="Next Part" className="downArrow" />
      </div>
    </div>
  );
};

export default DownIcon;
