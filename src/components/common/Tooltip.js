import React, { Fragment } from 'react';

const Tooltip = ({ isHidden, offSetTop, text }) => {
  const tooltip = {
    top: `${offSetTop - 80}px`,
  };

  return (
    <Fragment>
      { !isHidden && <div style={tooltip} className="tooltip"><p>{text}</p></div> }
    </Fragment>
  );
};

export default Tooltip;
