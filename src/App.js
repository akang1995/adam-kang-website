import "./App.css";
import Grid from "@material-ui/core/Grid";
import { About } from "./containers/About";

function App() {
  return (
    <Grid
      spacing={3}
      align-items-lg-center
      direction="row"
      justify="center"
      alignItems="center"
    >
      <About />
    </Grid>
  );
}

export default App;
