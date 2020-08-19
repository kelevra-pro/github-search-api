import React, { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { GithubContext } from '../context/github/githubContext';

export const Search = () => {
  const [value, setValue] = useState('');
  const { show } = useContext(AlertContext);
  const github = useContext(GithubContext);

  const onSubmit = event => {
    if (event.key !== 'Enter') {
      return;
    }

    if (value.trim()) {
      github.search(value.trim());
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
