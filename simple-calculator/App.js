import './App.css';
import Clc from './components/hooks/expriment/Clc';
import { ChakraProvider } from "@chakra-ui/react"
function App() {

  return (
    <div className="App">
      <ChakraProvider>
      <Clc/>
      </ChakraProvider>
    
    </div>
  );
}

export default App;
