const {Web3}= require('web3');
const ABI = require('../ABI.json');

const web3 = new Web3("https://eth-sepolia.g.alchemy.com/v2/IMp3T02reLtxb60xFUqqUopG1khMRbbc")
const contractAddress ="0x6be21d2dfa017b8bd55a446bd7e8252060fd5bdf"
const contract = new web3.eth.Contract(ABI,contractAddress)


module.exports={contract}