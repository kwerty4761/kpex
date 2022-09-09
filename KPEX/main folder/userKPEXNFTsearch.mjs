
export async function userKPEXNFTsearch () {
    var url_start = "https://api.opensea.io/api/v1/asset/";
    const KPEXNFTaddress = ["0x08D7C0242953446436F34b4C78Fe9da38c73668d",
    "0x08D7C0242953446436F34b4C78Fe9da38c73668d",
    "0x34d85c9CDeB23FA97cb08333b511ac86E1C4E258",
    "0x495f947276749Ce646f68AC8c248420045cb7b5e"
    ]
    const KPEXNFTtokenid = ["365",
    "651",
    "46270",
    "32726422945495125630438242978350975377621892003034643645620534688672364101633"
    ]
    var KPEXNFTowner = []
    var useraddress = await ethereum.request({ method: 'eth_requestAccounts' })
for (let i=0; i< KPEXNFTaddress.length; i++) {
        const options = {method: 'GET'};
        fetch(url_start.concat(KPEXNFTaddress[i],"/",KPEXNFTtokenid[i],"/owners?limit=20&order_by=created_date&order_direction=desc"), options)
        .then(response => response.json())
        .then(response => KPEXNFTowner.push(response.owners[0].owner.address))
        .catch(err => console.error(err));
        } 
    console.log("User Address = " + useraddress)
    console.log(KPEXNFTowner)
    var numberNFT = 0
    for (let i = 0 ; i < KPEXNFTaddress.length; i++) {
        if (KPEXNFTowner[i].equals(useraddress)) {
            numberNFT = numberNFT + 1
        }
    }
    console.log("No. of KPEX NFT's held by user: " + numberNFT)
    if (numberNFT == 0) {
        console.log("You have no relevant NFT's")
    }
    else {
        for (let i = 0 ; i < KPEXNFTaddress.length; i++) {
            if (i < 2 && KPEXNFTowner[i].equals(useraddress)) {
                console.log("You have NFT type No.1") 
            }
            else if (1 < i < 3  && KPEXNFTowner[i].equals(useraddress)) {
                console.log("You have NFT type No.2")
            }
        }
    }
}