import './App.css';
import { Tooltip } from './Tooltip';

function App() {
  return (
    <div>
    <p>
      Some text, some of which <Tooltip text="This is some more info about that first thing that you should find every interesting.">requires explanation.</Tooltip> (Scroll down for more.)
    </p>
    
    <div style={{ lineHeight: 80 }}>Scroll down</div>
    
    <p>
      <Tooltip text="You hovered over the second one!">Something else to hover over</Tooltip> is what this is.
    </p>
    
    <div style={{ lineHeight: 80 }}>Just more paddin'</div>
  </div>
  );
}

export default App;
