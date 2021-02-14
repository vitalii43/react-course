import './App.css';
import {
  HelloCreateElement,
  HelloClass,
  HelloPure,
  HelloFunctional
} from './Components';

function App() {
  return (
    <div className="App">
      {HelloCreateElement}
      <HelloClass/>
      <HelloPure/>
      <HelloFunctional/>
    </div>
  );
}

export default App;
