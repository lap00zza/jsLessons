/**
 * Created by Jewel Mahanta on 24-07-2016.
 */

/*Executing a Program

How do those collections of programming statements tell the computer what to do? The program needs to be executed,
also referred to as running the program.

Statements like a = b * 2 are helpful for developers when reading and writing, but are not actually in a form the
computer can directly understand. So a special utility on the computer (either an interpreter or a compiler) is used
to translate the code you write into commands a computer can understand.

For some computer languages, this translation of commands is typically done from top to bottom, line by line, every
time the program is run, which is usually called interpreting the code.

For other languages, the translation is done ahead of time, called compiling the code, so when the program runs later,
what's running is actually the already compiled computer instructions ready to go.

It's typically asserted that JavaScript is interpreted, because your JavaScript source code is processed each time
it's run. But that's not entirely accurate. The JavaScript engine actually compiles the program on the fly and then
immediately runs the compiled code.

Note: For more information on JavaScript compiling, see the first two chapters of the Scope & Closures title of
this series.*/

a = 2;
console.log(a);