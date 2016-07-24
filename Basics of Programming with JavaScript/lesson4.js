/**
 * Created by Jewel Mahanta (@lap00zza) on 24-07-2016.
 */

/*   Output
     ------

     In the previous code snippet, we used console.log(..). Briefly, let's look at what that line of code is all
     about.

     You may have guessed, but that's exactly how we print text (aka output to the user) in the developer console.
     There are two characteristics of that statement that we should explain.

     First, the log( b ) part is referred to as a function call (see "Functions"). What's happening is we're handing
     the b variable to that function, which asks it to take the value of b and print it to the console.

     Second, the console. part is an object reference where the log(..) function is located. We cover objects and
     their properties in more detail in Chapter 2.

     Another way of creating output that you can see is to run an alert(..) statement. For example:

     alert( b );
     If you run that, you'll notice that instead of printing the output to the console, it shows a popup "OK" box
     with the contents of the b variable. However, using console.log(..) is generally going to make learning about
     coding and running your programs in the console easier than using alert(..), because you can output many values
     at once without interrupting the browser interface.

     For this book, we'll use console.log(..) for output.

                                                -+-+-+-+-+-+-+-
                                                
     Input
     -----

     While we're discussing output, you may also wonder about input (i.e., receiving information from the user).

     The most common way that happens is for the HTML page to show form elements (like text boxes) to a user that
     they can type into, and then using JS to read those values into your program's variables.

     But there's an easier way to get input for simple learning and demonstration purposes such as what you'll
     be doing throughout this book. Use the prompt(..) function:

     age = prompt( "Please tell me your age:" );

     console.log( age );
     As you may have guessed, the message you pass to prompt(..) -- in this case, "Please tell me your age:"
     -- is printed into the popup.

     This should look similar to the following:

     [ https://github.com/getify/You-Dont-Know-JS/raw/master/up%20&%20going/fig2.png ]

     Once you submit the input text by clicking "OK," you'll observe that the value you typed is stored in the
     age variable, which we then output with console.log(..):

     [ https://github.com/getify/You-Dont-Know-JS/raw/master/up%20&%20going/fig3.png ]

     To keep things simple while we're learning basic programming concepts, the examples in this book will not
     require input. But now that you've seen how to use prompt(..), if you want to challenge yourself you can
     try to use input in your explorations of the examples.

   TODO: figure out how to do alert and prompt with WebStorm
 */