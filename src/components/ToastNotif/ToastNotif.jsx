/* eslint-disable react/require-default-props */

'use client';

import './ToastNotif.scss';
import PropTypes from 'prop-types';

function ToastNotif({ success = null, error = null, toggleToast }) {
  return (
    <div className={`toast ${success ? 'active success' : ''} ${error ? 'active error' : ''} `}>
      <div className="toast-content">
        <i className={`fas fa-solid check ${success ? 'success fa-check' : ''} ${error ? 'error fa-xmark' : ''}`} />
        <span className="text">
          {success} {error}
        </span>
      </div>
      <i onClick={toggleToast} className="fa-solid close">
        X
      </i>
      <div className={`progress ${success ? 'active success' : ''} ${error ? 'active error' : ''}`} />
    </div>
  );
}

ToastNotif.propTypes = {
  success: PropTypes.string,
  error: PropTypes.string,
  toggleToast: PropTypes.func.isRequired,
};

export default ToastNotif;
