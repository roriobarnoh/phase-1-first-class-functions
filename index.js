function receivesAFunction(spy){
    return spy();
}
receivesAFunction(function () { return "Hello, world"; })
function returnsANamedFunction(){
    return function func(){

    }
}
function returnsAnAnonymousFunction(){
    return function(){
        
    }
}
