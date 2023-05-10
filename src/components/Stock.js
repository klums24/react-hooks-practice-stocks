import React from "react";

function Stock({name, ticker, price, id, handleNewStock}) {

  function addStock(){
    handleNewStock(id) 
  }

 

  return (
    <div onClick={addStock}>
      <div className="card" id={id} >
        <div className="card-body" >
          <h5 className="card-title" name={name}>{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
