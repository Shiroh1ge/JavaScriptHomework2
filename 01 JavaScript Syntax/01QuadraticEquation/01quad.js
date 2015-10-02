/**
 * Created by haker on 14-Sep-15.
 */

function quad(a, b, c) {
    var a;
    var b;
    var c;
    var x1;
    var x2;
    var d = (b * b) - (4 * a * c);

    if (d > 0) {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        console.log("The roots are: x1 = " + x1 + "and " + "x2 = " + x2);
    }
    else if (d == 0) {
        x1 = x2 = -b / (2 * a);
        console.log("There is one root: " + x1);
    }
    else {
        console.log("No real roots");
        console.log(d);
    }
    console.log(quad(6, 5, -5));
    console.log(quad(2, -4, 2));
    console.log(quad(-6, 3, 5));

}
quad();