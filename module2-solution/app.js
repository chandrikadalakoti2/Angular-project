(function()
{
    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',ToBuyController )
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

    ToBuyController.$inject=['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService)
    {
        var Buylist=this;

        try{
        Buylist.items=ShoppingListCheckOffService.getitems();
        }
        catch(error)
        {
            Buylist.errormessage=error.message;
        }

        Buylist.removeItem=function(itemindex)
        {
            try{
            ShoppingListCheckOffService.removeItem(itemindex);
            }
            catch(error){Buylist.errormessage=error.message;}
        };

    }

    AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService)
    {
        var Boughtlist=this;

        Boughtlist.items1=[];
        console.log(Boughtlist.items1);
        if(angular.equals([],Boughtlist.items1))
        Boughtlist.errormessage='Nothing bought yet';
        else
        Boughtlist.errormessage='';
        Boughtlist.items1=ShoppingListCheckOffService.getitems1();
        
    }
    

    function ShoppingListCheckOffService()
    {
        var service=this;
        var items1=[];

        var items=[
            {'name':'cookies','quantity':10},
            {'name':'cupcakes','quantity':20},
            {'name':'chips','quantity':5},
            {'name':'biscuits','quantity':10},
            {'name':'chocolates','quantity':20}
        ];

        service.removeItem=function(itemindex)
        {
            console.log(items1);
            items1.push(items[itemindex]);
            items.splice(itemindex,1);
            if(items.length===0)
            throw new Error('Everything is Bought!');
        }
        
        service.getitems=function()
        {            
            return items;

        }

        service.getitems1=function()
        {
            return items1;
        }
    }
    
})();