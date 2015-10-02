/**
 * Created by haker on 01-Oct-15.
 */
$(document).ready(function () {


    function sum(a) {

        var sum = a

        function f(b) {
            sum += b
            return f
        }

        f.toString = function() { return sum }

        return f
    }


    sum(5)(3)(4);

});