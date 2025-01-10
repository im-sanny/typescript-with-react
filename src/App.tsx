import React, { createContext, ReactNode, useContext, useState } from 'react';
import './App.css';
import Button from './Button';
import Counter from './Counter';
import Counter2 from './Counter2';
import Greeting from './Greeting';
import List from './List';

interface UserContextType {
  name: string;
  setName: (name: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [name, setName] = useState<string>('Thomas');
  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};

const DisplayName: React.FC = () => {
  const user = useContext(UserContext);
  if (!user) throw new Error('DisplayName must be used within UserProvider');
  return <p>Name:{user.name}</p>;
};

function App() {
  const handleClick = () => alert('Button clicked');
  return (
    <>
      <UserProvider>
        <div>
          <Greeting name="Thomas" age={69}></Greeting>
          <Button label="Click Me" onClick={handleClick}></Button>
          <Counter />
          <Counter2 />
          <DisplayName></DisplayName>
          <List
            items={['Apple', 'Banana', 'Mango']}
            renderItem={(item) => <span>{item}</span>}
          />
        </div>
      </UserProvider>
    </>
  );
}

export default App;
