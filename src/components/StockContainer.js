import React, { useState, useEffect } from "react";
// import Stock from "./Stock";

function StockContainer() {

  const [stockList, setStockList] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((response) => response.json())
      .then((stocks) => {
        setStockList(stocks);
      });
  }, []);
  // use an empty dependencies array, so we only run the fetch request ONCE


  return (
    <div>
      <h2>Stocks</h2>
      {stockList.map((stocks) => stocks.name)}
    </div>
  );
}


export default StockContainer;
