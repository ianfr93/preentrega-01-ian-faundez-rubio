import React from 'react';

function ItemListContainer({ Saludo }) {
  return (
    <div style={{
      fontSize: '30px',
      fontWeight: '900',
      color: '#334286', 
      textAlign: 'left',
      margin: '20px 0',
      padding: '0 20px', 
      fontfamily: 'Lato', 
    }}>
      {Saludo}
    </div>
  );
}

export default ItemListContainer;
