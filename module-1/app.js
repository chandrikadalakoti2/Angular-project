(function()
{
    'use strict';

    angular.module('LunchCheck',[])
    .controller('LunchCheckController',function($scope)
    {
        var arr=[],c=0;
        $scope.Check_If_Too_Much=function()
        {
          if($scope.name==undefined || $scope.name=='')
          $scope.value='Please enter data first';
          else{
          arr=$scope.name.split(',');
          for(var i=0;i<arr.length;i++)
          {
              c=c+1;
          }
          if(c<=3)
          {
            $scope.value='Enjoy!';
            c=0;
          }
          else
          {
          $scope.value='Too much!';
          c=0;
        }
    }
        };

    });

})();
