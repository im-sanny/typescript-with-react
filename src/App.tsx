import './App.css';
import Button from './Button';
import Counter from './Counter';
import Greeting from './Greeting';

function App() {
  const handleClick = () => alert('Button clicked');
  return (
    <>
      <div>
        <Greeting name="Thomas" age={69}></Greeting>
        <Button label="Click Me" onClick={handleClick}></Button>
        <Counter/>
      </div>
    </>
  );
}

export default App;
