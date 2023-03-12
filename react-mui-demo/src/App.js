import './App.css';
import { MuiAutocomplete } from './components/MuiAutocomplete';
import MuiButton from './components/MuiButton';
import { MuiRadioButton } from './components/MuiRadioButton';
import { MuiRating } from './components/MuiRating';
import { MuiSelect } from './components/MuiSelect';
import { MuiTextField } from './components/MuiTextField';
import { MuiTypography } from './components/MuiTypography';

function App() {
  return (
    <div className="App">
      {/* <MuiTypography /> */}
      {/* <MuiButton /> */}
      {/* <MuiTextField /> */}
      {/* <MuiSelect /> */}
      {/* <MuiRadioButton /> */}
      {/* <MuiRating /> */}
      <MuiAutocomplete />
    </div>
  );
}

export default App;
