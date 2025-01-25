import React from 'react';

interface Props {
  title: string;
  onClick: () => void;
}

const Button: React.FC<Props> = React.memo(({ title, onClick }) => {
  console.log(`Rendering button ${title}`);
  return <button onClick={onClick}>{title}</button>;
});

export default Button;
