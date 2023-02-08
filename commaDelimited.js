/*
1. Printing Array elements with Comma delimiters

DESCRIPTION:
   Input: Array of elements
    
   ["h","o","l","a"]

    Output: String with comma delimited elements of the array in th same order.

    "h,o,l,a"
    
*/

function commaDelimited(arr) {
    var delimitedString = "";
    for (var i = 0; i < arr.length; i++) {
        if (i != arr.length - 1) {
            delimitedString += arr[i] + ",";
        } else {
            delimitedString += arr[i];
        }
    }
    return delimitedString;
}

var arr = ["h", "o", "l", "a"]
var res = commaDelimited(arr);
console.log("\"" + res + "\"");
