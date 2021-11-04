import './App.css';
import Router from "./routes";
import FinesProvider from './context/fines/Provider';

const App = () => {
  return (
    <FinesProvider>
      <Router />
    </FinesProvider>
  );
}

export default App;