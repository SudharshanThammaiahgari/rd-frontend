/*
 * 2. Opposite number
 
 * DESCRIPTION:
    Very simple, given an integer or a floating-point number, find its opposite.

    Examples:
        1: -1
        14: -14
        -34: 34
    
 */

import java.util.*;

public class OppositeNumber {
    public static int oppositeInteger(int number) {
        return -1 * number;
    }

    public static float oppositeFloat(float number) {
        return -1 * number;
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int n;
        float f;
        f = sc.nextFloat();
        n = (int) f;
        if (n == f) {
            // Integer
            System.out.println(oppositeInteger(n));
        } else {
            // Flaoting point number
            System.out.println(oppositeFloat(f));
        }
        sc.close();
    }
}
