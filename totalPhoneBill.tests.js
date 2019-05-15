describe('totalPhoneBill' , function(){
    it('takes in a string calls made and sms sent' , function(){

        assert.equal(transportFee("call, sms, call, sms, sms"),"R7.45");
        
   });

});