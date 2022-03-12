import { useRef, useState } from 'react';
import './App.css';
import useRandomJoke from './useRandomJoke';

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState('Benjamin');
  const [lastName, setLastName] = useState('Peck');
  const joke = useRandomJoke(firstName, lastName);

  const bgColor = '#505050';

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <center>
        <h1>The Joke Generator</h1>
        <h3>{joke}</h3>
        <form onSubmit={generateJoke}>
          <input placeholder="first name" ref={firstNameRef} />
          <input placeholder="last name" ref={lastNameRef} />
          <button>Generate Joke</button>
        </form>
      </center>
    </div>
  );
}

export default App;
