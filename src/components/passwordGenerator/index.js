import React from "react";

const passwordOptions = [
  "Include upper case characters",
  "Include lower case character",
  "Include special characters"
];



class PasswordGenerator extends React.Component {
  render() {
  return (
    <div className="checkList">
      <h2 className="title">Password Options:</h2>
      <ul className="list-container">
        {passwordOptions.map((item, index) => (
           <div key={index}>
            <input value={item} type="checkbox" />
            <span>{item}</span>
           </div>
        ))}
      </ul>
    </div>
  );
  }
}

export default PasswordGenerator;