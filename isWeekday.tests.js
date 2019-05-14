describe('isWeekday' , function(){
    it('shound check if a day is a weekday ' , function(){
        
        assert.equal(isWeekday('Saturday'),false)
          
    });
    it('or a weekend' , function(){
        assert.equal(isWeekday('Monday'), true);

});

});
