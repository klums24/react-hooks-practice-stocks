import React from "react";
import Stock from "./Stock";

function PortfolioContainer({userStocks, handleRemoveStock}) {
 
  
  return (
    <div>
      <h2>My Portfolio</h2>
        
        {userStocks.map((stock) => <Stock {...stock}/>)}
      
    </div>
  );
}

export default PortfolioContainer;
