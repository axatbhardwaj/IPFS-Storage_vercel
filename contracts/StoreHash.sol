//deployed using remix 
// https://rinkeby.etherscan.io/address/0xb4dd0d41b754614be4895a5840db4e2f5564aa03#code
pragma solidity 0.4.24;

contract Contract {
 string ipfsHash;
 
 function sendHash(string x) public {
   ipfsHash = x;
 }

 function getHash() public view returns (string x) {
   return ipfsHash;
 }
}
