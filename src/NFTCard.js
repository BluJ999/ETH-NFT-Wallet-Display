import React from "react";

const NFTCard = ({nft}) => {
    return(
    <div className="NFT-card">
        <div className='NFT-image-container' > 
            <img src={nft.meta.content[0].url} className = 'NFT-image-container' alt="no NFT image found"/>          
            </div>
        <div className="card-title">
            {nft.meta.name}
        </div>    
        <div className="content-item">
            {nft.meta.description}
        </div>        
    </div>
    )
}

export default NFTCard