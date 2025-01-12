import React from 'react';

interface Props {
  title: string;
  onclick: () => void;
}

const Button: React.FC<Props> = React.memo(({ title, onclick }) => {
  console.log(`Rendering button ${title}`);
  return <button onClick={onclick}>{title}</button>;
});

export default Button;
