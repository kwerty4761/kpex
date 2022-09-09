
export function testnet_userKPEXNFTsearch () {
    var url_start = "https://testnets-api.opensea.io/api/v1/asset/";
    const KPEXNFTaddress = ["0x88B48F654c30e99bc2e4A1559b4Dcf1aD93FA656","0x88B48F654c30e99bc2e4A1559b4Dcf1aD93FA656","0x88B48F654c30e99bc2e4A1559b4Dcf1aD93FA656","0x88B48F654c30e99bc2e4A1559b4Dcf1aD93FA656","0x88B48F654c30e99bc2e4A1559b4Dcf1aD93FA656"]
    const KPEXNFTtokenid = ["102781272118809799423833216707063472916082498177280938735399098908819102629889","32726422945495125630438242978350975377621892003034643645620534688672364101637","32726422945495125630438242978350975377621892003034643645620534689771875729409","32726422945495125630438242978350975377621892003034643645620534690871387357185","32726422945495125630438242978350975377621892003034643645620534691970898984961"]
    const KPEXNFTowner = []


    for (let i=0; i< KPEXNFTaddress.length; i++) {
        getowneraddress(i);
    }
    function getowneraddress(i) {
        setTimeout(function(){
                const options = {method: 'GET'};
                fetch(   url_start.concat(KPEXNFTaddress[i], "/", KPEXNFTtokenid[i], "/"), options)
                .then(response => response.json())
                .then(response => KPEXNFTowner.push(response.asset_contract.address))
                .catch(err => console.error(err));
        }, 2000*i)
    }

    console.log(KPEXNFTowner)
}