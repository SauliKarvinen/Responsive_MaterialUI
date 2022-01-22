import "./App.css";
import React from "react";
import { useCallback, useState, useReducer, useRef } from "react";
import useForm from "./hooks/useForm";
import useFetch from "./hooks/useFetch";
import InputArea from "./components/InputArea";
import Counter from "./components/Counter";
import clickreducer from "./reducers/clickreducer";

/* const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}; */

function App() {
  const userProps = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };
  const [state, handleInputChange] = useForm(() => userProps);
  const [url, setUrl] = useState(() => "http://numbersapi.com/0/trivia");
  const { data, loading } = useFetch(url);
  const renderCount = useRef(0);
  const [counter, setCounter] = useState(() => 0);
  const [reducerState, dispatch] = useReducer(clickreducer, 0);

  const randomURL = () => {
    const rnd = Math.floor(Math.random() * 20);
    setUrl(`http://numbersapi.com/${rnd}/trivia`);
  };

  /* const InputArea = (props) => {
    console.log("props:", props);
    return (
      <div className="input-container">
        <input
          name="firstname"
          placeholder="First name"
          value={props.firstname}
          onChange={props.handleChange}
        />
        <input
          name="lastname"
          placeholder="Last name"
          value={props.lastname}
          onChange={props.handleChange}
        />
        <input
          name="email"
          placeholder="E-mail"
          value={props.email}
          onChange={props.handleChange}
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={props.password}
          onChange={props.handleChange}
        />
      </div>
    );
  }; */

  const inputCallback = useCallback(
    (e) => {
      handleInputChange(e);
    },
    [state]
  );

  const handleCount = useCallback(() => {
    setCounter((c) => c + 1);
  }, [setCounter]);

  console.log("Rendered!");
  return (
    <div className="App">
      <h1>Render count: {renderCount.current++}</h1>
      <InputArea {...state} handleChange={inputCallback} />
      <div>Firstname: {state.firstname}</div>
      <div>Lastname: {state.lastname}</div>
      <div>Email: {state.email}</div>
      <div>Password: {state.password}</div>
      <button onClick={randomURL}>RANDOM</button>
      <div>Status:</div>
      {!loading && (
        <div>
          <div>data: {data}</div>
          <div>loading: {loading}</div>
        </div>
      )}

      <div>
        <h1>Counter: {reducerState}</h1>
        <Counter handleClick={dispatch} />
      </div>
    </div>
  );
}

export default App;
