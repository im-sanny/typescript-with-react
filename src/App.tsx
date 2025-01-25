import React, { createContext, ReactNode, useContext, useState } from 'react';
import './App.css';
import Button from './component/Button';
import Counter from './component/Counter';
import Counter2 from './component/Counter2';
import Greeting from './component/Greeting';
import List from './component/List';
import LoginForm from './component/LoginForm';

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
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);

  return (
    <>
      <UserProvider>
        <div>
          <Greeting name="Thomas" age={69}></Greeting>
          <Button title="Click me" onClick={handleClick}></Button>
          <Counter />
          <Counter2 />
          <DisplayName></DisplayName>
          <List
            items={['Apple', 'Banana', 'Mango']}
            renderItem={(item) => <span>{item}</span>}
          />
          <LoginForm />
        </div>
      </UserProvider>
    </>
  );
}

export default App;
