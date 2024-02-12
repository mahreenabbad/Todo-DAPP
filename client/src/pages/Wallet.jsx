// import PropTypes from 'prop-types';
import {Web3} from "web3";
import ABI from './ABI.json'
import { useNavigate } from "react-router-dom";

const Wallet =({saveState})=>{
    const navigateTo = useNavigate();

    const connectWallet =async()=>{
        try {
            if(window.ethereum){
                const web3 = new Web3(window.ethereum);
                const accounts = await window.ethereum.request({
                    method:"eth_requestAccounts"
                })
                const contractAddress ="0x6be21d2dfa017b8bd55a446bd7e8252060fd5bdf"
                const contract = new web3.eth.Contract(ABI,contractAddress)
                saveState({web3:web3,contract:contract,account:accounts[0]})
                navigateTo("/view-all-task")
                // console.log(contract,accounts)
            }else{
                throw new Error()
            }
            
        } catch (error) {
            console.log(error)
        }

    }
    return<>
    <div className="wallet_header">
        <span>WELCOME TO</span> <p>TODO 3.0</p>

    </div>
    <div className="connect_wallet_section todo_btn ">
       <p>connect metamask to acces the app</p>
       <button onClick={connectWallet}>Connect Wallet</button>
    </div>
    
    </>
}
// Wallet.prototypes ={
//     saveState: PropTypes.func.isrequired,
// };
export default Wallet;