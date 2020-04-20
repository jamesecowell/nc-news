import React from 'react';

const Burger = (props) => {
  const { mobileNavOpen } = props;

  let line1Class = 'line1';
  let line2Class = 'line2';
  let line3Class = 'line3';

  if (mobileNavOpen) {
    line1Class = 'line1 open';
    line2Class = 'line2 open';
    line3Class = 'line3 open';
  }

  return (
    <div className="burger" onClick={props.click}>
      <div className={line1Class}></div>
      <div className={line2Class}></div>
      <div className={line3Class}></div>
    </div>
  );
};

export default Burger;
