'use strict';

const Test = require('../contracts/Test.sol');

contract('Test', ()=>{

    let instance;
    before(async () =>{
        instance = await Test.new();
    })

    it('should set the a value', async ()=>{
        
    })

})