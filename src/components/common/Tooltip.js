import React, { Fragment } from 'react';

const Tooltip = ({ isHidden, offSetTop, text }) => {
  const tooltip = {
    position: 'absolute',
    background: 'rgb(155, 154, 154)',
    borderRadius: '3px',
    padding: '1.2rem 1.6rem',
    textAlign: 'center',
    width: '10rem',
    top: `${offSetTop + 145}px`,
    transition: '1s ease-in-out',
  };

  return (
    <Fragment>
      { !isHidden && <div style={tooltip}><p>{text}</p></div> }
    </Fragment>
  );
};

export default Tooltip;
