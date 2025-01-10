import React from 'react';

interface ListProp<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

const List = <T,>({ items, renderItem }: ListProp<T>): React.ReactElement => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};

export default List;
