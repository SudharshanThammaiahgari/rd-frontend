/*
1. Printing Array elements with Comma delimiters

DESCRIPTION:
   Input: Array of elements
    
   ["h","o","l","a"]

    Output: String with comma delimited elements of the array in th same order.

    "h,o,l,a"
    
*/

import java.util.*;

public class CommaDelimiters {
    public static String delimitedString(String arr[]) {
        String result = "";
        for (int i = 0; i < arr.length; i++) {
            if (i != arr.length - 1) {
                result += arr[i] + ",";
            } else {
                result += arr[i];
            }
        }
        return result;
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        String arr[] = sc.nextLine().split(" ");
        System.out.println("\"" + delimitedString(arr) + "\"");
        sc.close();
    }
}