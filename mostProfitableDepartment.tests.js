describe('mostProfitableDepartment' , function(){
    it('should determine which of the department is the most profitable' , function(){
        
      assert.deepEqual(mostProfitableDepartment(salesData),'outdoor');
   });
   it('should return zero if the data entered is wrong' , function(){
        
    assert.deepEqual(mostProfitableDepartment('0pppp'),0);
 });
});
