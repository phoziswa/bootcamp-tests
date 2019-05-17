describe('findItemsOver20' , function(){
    it('should return all the products that have a quantity higher than 20' , function(){
        
      assert.deepEqual(findItemsOver20([{"name":"apples","qty":10},{"name":"pears","qty":37}]),[{"name":"pears","qty":37}]);
   });
   it('should return all the products that have a quantity higher than 20' , function(){
        

   assert.deepEqual(findItemsOver20([{"name":"apples","qty":3},{"name":"bananas","qty":27}]),[{"name":"bananas","qty":27}]);
});
});

