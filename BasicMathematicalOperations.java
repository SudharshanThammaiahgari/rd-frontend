
/*
 * 3. Basic Mathematical Operations
 
 * DESCRIPTION:
    Your task is to create a function that does four basic mathematical operations.
    The function should take three arguments - operation(string/char), value1(number), value2(number).
    The function should return result of numbers after applying the chosen operation.

    Examples(Operator, value1, value2) --> output
        ('+', 4, 7) --> 11
        ('-', 15, 18) --> -3
        ('*', 5, 5) --> 25
        ('/', 49, 7) --> 7

 */

import java.util.*;

public class BasicMathematicalOperations {
    public static void calculate(char operator, int num1, int num2) {
        int num3 = 0;
        switch (operator) {
            case '+':
                num3 = num1 + num2;
                break;
            case '-':
                num3 = num1 - num2;
                break;
            case '*':
                num3 = num1 * num2;
                break;
            case '/':
                num3 = num1 / num2;
                break;
        }
        System.out.println("(\'" + operator + "\', " + num1 + ", " + num2 + ") " + "--> " + num3);
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        char c = sc.next().charAt(0);
        int n1 = sc.nextInt();
        int n2 = sc.nextInt();
        calculate(c, n1, n2);
        sc.close();
    }
}
