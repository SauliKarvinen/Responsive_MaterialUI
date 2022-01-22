import { NavBar } from "./components/NavBar";
import { BoxContainer } from "./components/BoxContainer";
import { Form } from "./components/Form";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./styles.css";

function App() {
  const theme = createTheme();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <BoxContainer />
        <Form />
      </ThemeProvider>
    </div>
  );
}

export default App;
