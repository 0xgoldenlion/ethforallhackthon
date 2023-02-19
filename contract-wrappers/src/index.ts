import {
  Ethereum_Module,
  Ethereum_TxResponse,
  Args_verifyAndMintNft,
} from "./wrap";
import { abi, bytecode } from "./contracts/Sudoku";


export function verifyAndMintNft(args: Args_verifyAndMintNft): Ethereum_TxResponse {
  const res = Ethereum_Module.callContractMethod({
    address: args.address,
    method: "function verifySudokuAndMintNft( uint256[2],uint256[2][2],uint256[2],uint256[81])",
    args: [args.value.toString()],
    connection: args.connection,
    txOverrides: null,
  }).unwrap();

  return res;
}

