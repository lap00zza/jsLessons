/**
 * Created by Jewel Mahanta on 24-07-2016.
 */

/*Expressions

Statements are made up of one or more expressions. An expression is any reference to a variable or value, or a set
of variable(s) and value(s) combined with operators.

    For example:

    a = b * 2;

This statement has four expressions in it:

2 is a literal value expression
b is a variable expression, which means to retrieve its current value
b * 2 is an arithmetic expression, which means to do the multiplication
a = b * 2 is an assignment expression, which means to assign the result of the b * 2 expression to the variable a
(more on assignments later)
A general expression that stands alone is also called an expression statement, such as the following:

    b * 2;
This flavor of expression statement is not very common or useful, as generally it wouldn't have any effect on the
running of the program -- it would retrieve the value of b and multiply it by 2, but then wouldn't do anything with
that result.

    A more common expression statement is a call expression statement (see "Functions"), as the entire statement is
the function call expression itself:

    alert( a );*/

// Lets try to separate out the expressions in => a = b * 2 * foo(c * 3) using [] (square brackets)
// Remember a term called Operator Precedence

// [ [a] = [ [b] * [2] * [ [foo]( [ [c] * [3] ] ) ] ] ];

// Consider => a = b * 2 + foo(c * 3)
// In this case b * 2 will happen first (moving from left to right) and then foo(c * 3) is added.