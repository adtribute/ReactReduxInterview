import React from 'react';
import { useSelector } from 'react-redux';
import { selectItems } from '../../common/selectors';

export function Greeting() {
  const items = useSelector(selectItems);
  const firstItem = items?.[0];

  const renderFirstItem = () => {
    if (firstItem) {
      return (
        <p>
          Hello, your first is task is "{firstItem}".
          You have {items.length} total tasks.
        </p>
      );
    }

    return (
      <p>
      Hello, you do not have any TODOs!
    </p>
    );
  };

  return (
    <div>
      {renderFirstItem()}
    </div>
  );
}
