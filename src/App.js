import './App.css';
import { CtxProvider } from './context/PizzaContext';

function App() {
  return (
    <div className="App container">
      <h1>Pizzería Mamma Mía!</h1>
      <CtxProvider/>
    </div>
  );
}

export default App;
