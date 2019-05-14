describe('regCheck' , function(){
    it('should check if a registration number is for GP, L, EC, MP registration plates' , function(){
        
        assert.equal(regCheck('DV 23 NB GP', 'GP'),true);
    });

    it('otherwise returns false ' , function(){
        
        assert.equal(regCheck('DV 23 LP GP', 'MP'),false);
    });
});