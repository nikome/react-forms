import logo from './logo.svg';
import SurveyComponent from './SurveyComponent';
import { InlineWidget } from "react-calendly";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <p>Code here</p>
        <SurveyComponent />
        <InlineWidget url="https://calendly.com/nikome" />
      </div>
    </div>
  );
}

export default App;
