describe('countAllPaarl' , function(){
    it('should take a parameter string with registration numbers separated with commas and returns the number of registration numbers in the string for Paarl' , function(){
        
        assert.equal(countAllPaarl(reg), 3);
    });
    it('should return nothing if it is not from Paarl' , function(){
        
        assert.equal(countAllPaarl('CL 123-546, CK 345'), 0);
    });
});