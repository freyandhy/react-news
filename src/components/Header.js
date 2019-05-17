import React from 'react';

const Header = ({ title }) => {
  return (
    <div className="p-3" style={{
      backgroundColor: 'blue',
    }}>
      <h1 style={{
        color: 'white',
        textAlign: 'center'
      }}>{title}</h1>
    </div>
  );
}
 
export default Header;
