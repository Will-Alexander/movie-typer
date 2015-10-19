# movie-typer
A project for the nitpicky among us.

Okay Aswin, here's the functionality at the moment:

On the main page, you type text into the text box. Each keystroke is recorded using javascript, and along with the keystroke, we record the difference between the current timestamp (to the millisecond) and the timestamp of the previous keystroke, aka the amount of time it took to hit the current key. Currently, this is saved in a javascript object called key_object, with key:value pairs of "number associated with the keystroke" : { array of these time differences }. 

The only real additional thing the javascript file does at the moment is 1) print the contents of that object to console, if you click the "Submit" button on the main page, and 2) prevent Tab from doing anything. 

The html file is super basic, and probably won't get much more complicated. You're much better at this than I am, so you'll surely have no trouble reading it more quickly than I can describe it. :)
