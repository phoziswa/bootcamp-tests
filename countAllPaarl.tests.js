describe('countAllPaarl' , function(){
    it('should take a parameter string with registration numbers separated with commas and returns the number of registration numbers in the string for Paarl' , function(){
        
        assert.equal(countAllPaarl(reg), 3);
    });

});