export function testnet_walletsearch(){
    var url_start = "https://testnets-api.opensea.io";
    var wallet = window.prompt("Enter wallet to search:")
    const options = {method: 'GET'};
    fetch(url_start.concat("/api/v1/assets?owner=",wallet,"&order_direction=desc&offset=0&limit=20&include_orders=false"),options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  }
  
// response.asset.length returns the number of assets stored in the wallet
// response.asset[i].asset_contract.address returns address of ith NFT in the wallet
// response.asset[i].token_id returns token id of ith NFT in the wallet
// response.asset[i].i

