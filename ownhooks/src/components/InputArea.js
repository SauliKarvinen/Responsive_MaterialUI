import React from "react";

const InputArea = React.memo(
  ({ firstname, lastname, email, password, handleChange }) => {
    console.log("InputArea Rendered!");
    return (
      <div className="input-container">
        <input
          name="firstname"
          placeholder="First name"
          value={firstname}
          onChange={handleChange}
        />
        <input
          name="lastname"
          placeholder="Last name"
          value={lastname}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={handleChange}
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={handleChange}
        />
      </div>
    );
  }
);

export default InputArea;
