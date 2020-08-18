import React, { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/alertContext';

export const Search = () => {
  const [value, setValue] = useState('');
  const { show } = useContext(AlertContext);

  const onSubmit = event => {
    if (event.key !== 'Enter') {
      return;
    }

    if (value.trim()) {
      console.log('Make request with: ', value);
    } else {
      show('Please enter the user nickname');
    }
  };

  return (
    <div className="form-group">
      <input
        className="form-control"
        onChange={e => setValue(e.target.value)}
        onKeyPress={onSubmit}
        placeholder="Enter the user nickname..."
        type="text"
        value={value}
      />
    </div>
  );
};
