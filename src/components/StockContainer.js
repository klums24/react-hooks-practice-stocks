import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, handleNewStock, handleRemoveStock}) {
  

  return (

    
    <div>
      <h2>Stocks</h2>
      
      {/* render stock list here*/}
      {stocks.map((stock) => <Stock {...stock} handleNewStock={handleNewStock} handleRemoveStock={handleRemoveStock}/>)}
      
    </div>
  );
}

export default StockContainer;
