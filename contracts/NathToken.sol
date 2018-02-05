pragma solidity ^0.4.17;

import 'zeppelin-solidity/contracts/token/ERC20/StandardToken.sol';
contract NathToken is StandardToken {
	string public name = 'NathToken';
	string public symbol = 'NTK';
	uint8 public decimals = 0;
	uint public INITIAL_SUPPLY = 200000;

	function NathToken() public {
  totalSupply_ = INITIAL_SUPPLY;
  balances[msg.sender] = INITIAL_SUPPLY;
}	


}

