describe('mostProfitableDepartment' , function(){
    it('should determine which of the department is the most profitable' , function(){
        
      assert.deepEqual(mostProfitableDepartment(salesData),'outdoor');
   });
   it('should determine which of the department is the least profitable' , function(){
        
    assert.deepEqual(mostProfitableDepartment(salesData),'outdoor');
 });
});
