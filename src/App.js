import './App.css';
import { useEffect, useState } from 'react'; 
import NFTContainer from "./NFTContainer";
import getNftData from './getNftData';





function App() {

  const [walletAdress, setWalletAdress] = useState(null) //creates these
  const [nfts, setNfts] = useState([]); 


  // connect eth wallet if not connected
  const connectWallet = async  () => {
    if (typeof window.ethereum !== 'undefined') {
      const accounts  = await window.ethereum.request({method: "eth_requestAccounts"});
      setWalletAdress(accounts[0])
    }
  }

  connectWallet(setWalletAdress)
  useEffect(() => {
    getNftData(walletAdress, setNfts)
  }, [walletAdress])

  return (

    <div className="App">
      
      <div className="wallet-adress">
        Account: {walletAdress}
      </div>

      <button className="connect-button" onClick={connectWallet}>
      Connect Wallet
      </button>

      <NFTContainer nfts={nfts} />
    </div>
  );
}

export default App;
