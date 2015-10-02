/**
 * Created by haker on 01-Oct-15.
 */
$(document).ready(function () {

function printArgsInfo(){
    for (var i=0;i<arguments.length;i++){
        console.log(arguments[i] + " (" + typeof arguments[i] + ")");

    }

};


  printArgsInfo.call(undefined, 5,"6est",true);
    printArgsInfo.call(undefined);
    printArgsInfo.apply(undefined,[1,3,5,"5",true])
    printArgsInfo.apply(undefined);
});