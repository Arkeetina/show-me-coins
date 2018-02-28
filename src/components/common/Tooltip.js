import React, { Fragment } from 'react';

const Tooltip = ({ isHidden, offSetTop, text }) => {
  const tooltip = {
    position: 'absolute',
    background: 'rgb(155, 154, 154)',
    borderRadius: '3px',
    marginLeft: '40px',
    padding: '1.2rem 1.6rem',
    textAlign: 'center',
    width: '10rem',
    top: `${offSetTop - 60}px`,
    transition: '0.3s ease-in-out',
    ':after': {
      content: ' ',
      position: 'absolute',
      top: '100%', /* At the bottom of the tooltip */
      left: '50%',
      marginLeft: '-5px',
      borderWidth: '5px',
      borderStyle: 'solid',
      borderColor: 'black transparent transparent transparent',
    },
  };

  return (
    <Fragment>
      { !isHidden && <div style={tooltip}><p>{text}</p></div> }
    </Fragment>
  );
};

export default Tooltip;
