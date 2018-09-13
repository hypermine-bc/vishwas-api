pragma solidity  ^0.4.2;

contract Test{
    uint val;

    function setter(uint _val) public {
        val = _val;
    }

    function getter() public view returns(uint) {
        return val;
    }
}