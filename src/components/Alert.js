import React, { useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  if (!alert) return null;

  return (
    <div
      className={`alert alert-${alert.type || 'secondary'} alert-dismissible`}
      role="alert"
    >
      {alert.text}
      <button
        aria-label="Close"
        className="close"
        onClick={hide}
        type="button"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
