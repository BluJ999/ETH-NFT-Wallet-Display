import React from "react";


const getNftData = async (walletAdress, setNfts) => {
    if(!walletAdress) return;

      const response = await fetch('https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:'+walletAdress) //make this wallet address varriable 
      
      const data = await response.json()
      setNfts(data.items)
      debugger
    }

export default getNftData