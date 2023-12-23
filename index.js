let collectionNFT = [];

function mintNFT(name, size, properties, color,  brand ) {
  const nft = {
    name: name,
    size: size,
    properties: properties,
    color: color,
    brand: brand,
    
  };
  collectionNFT.push(nft);
}

function listNFTs() {
  for (let i = 0; i < collectionNFT.length; i++) {
    console.log(collectionNFT[i]);
  }
}

function getTotalSupply() {
  return collectionNFT.length;
}

mintNFT("Lacoste", "XL", "Leather", "Maroon", "Lacoste");
mintNFT("Rebook","XXL", "Canvas", "Red", "Rebook");
mintNFT("Adidas", "XXXL", "Crocodile", "Black", "Adidas");

listNFTs();

console.log("Total Supply:", getTotalSupply());
