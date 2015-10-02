/**
 * Created by haker on 01-Oct-15.
 */
$(document).ready(function () {

    function testContext() {
        console.log(this);

    };

    testContext();

    function callTestContext() {
      testContext();

    };
    callTestContext();

var callTestContext2 = new testContext();



});