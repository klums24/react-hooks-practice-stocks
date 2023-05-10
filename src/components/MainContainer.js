import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [userStocks, setUserStocks] = useState([])

  function handleNewStock(id){
    setUserStocks([...userStocks, stocks.find(stock => stock.id === id) ])
    // console.log(e.target)
  }

  

  //GET request to render stocks on page
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(response => response.json())
    .then(data => {
      setStocks(data)
    })
  }, [])
  


  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer  stocks={stocks} handleNewStock={handleNewStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer userStocks={userStocks}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
