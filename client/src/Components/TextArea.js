import React from "react";
import "../Styles/TextArea.css";

const Input = ({
  d,
  iconClass,
  data,
  setData,
  type,
  placeholder,
  name,
  err,
  msg,
}) => {
  return (
    <>
      <div className="d-flex justify-content-center input-con">
        <div className="tooltipcont">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="40"
            fill="currentColor"
            className={iconClass + " icon " + (err ? "text-danger" : "")}
            viewBox="0 0 16 16"
          >
            <path d={d} />
          </svg>
          {err ? <span className="tooltiptext">{msg}</span> : null}
        </div>
        <div>
          <textarea
            value={data.value}
            onChange={(e) => {
              setData((prev) => ({ ...prev, value: e.target.value }));
            }}
            type={type}
            placeholder={placeholder}
            name={name}
            id="input"
          />
          <div className="mb-4"></div>
        </div>
      </div>
    </>
  );
};

export default Input;
