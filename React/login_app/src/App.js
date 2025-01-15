
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Component/Home';

function App() {
  return (
  
    
      <Switch>
        <Route path="/" exact component={Home} />
       
      </Switch>
   
  
   
  );
}

export default App;
