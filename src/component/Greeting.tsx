interface Props {
  name: string;
  age: number;
}

const Greeting: React.FC<Props> = ({ name, age }) => {
  return (
    <div>
      <h1>Hello {name}</h1>
      <p>Your are {age} year old</p>
    </div>
  );
};

export default Greeting;
