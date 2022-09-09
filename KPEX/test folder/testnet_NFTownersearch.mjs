
export function testnet_NFTownersearch(){
    var url_start = "https://testnets-api.opensea.io/api/v1/asset/";
    var address = window.prompt("Enter relevant NFT address: ");
    var tokenId = window.prompt("Enter tokenID of NFT: ");
    const options = {method: 'GET'}
    fetch(url_start.concat(address,"/",tokenId,"/owners?limit=20&order_by=created_date&order_direction=desc"), options)
     .then(response => response.json())
     .then(response => alert(response.owners[0].owner.address))
     .catch(err => console.error(err))
  }