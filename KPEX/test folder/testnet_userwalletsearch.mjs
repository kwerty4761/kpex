export async function testnet_userwalletsearch(){
    const userwalletarray = await ethereum.request({ method: 'eth_requestAccounts' });
    const userwallet = userwalletarray[0]
    var url_start = "https://testnets-api.opensea.io";
    const options = {method: 'GET'};
    fetch(url_start.concat("/api/v1/assets?owner=",userwallet,"&order_direction=desc&offset=0&limit=20&include_orders=false"),options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}

