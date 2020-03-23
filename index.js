//-----Loops-----

//--layout

//for (initialize; condition; increment);
//for (initialize; condition; increment) single statement;
//for (initialize; condition; increment) { multiple; statements; }

//A for loop is a operator that will run and then start over as long as its argument remains true

for (let i = 1; i < 6; i++) {                       //this for loop will output the value of the counter in its argument
    console.log(i);                                     //output 1, 2, 3, 4, 5
};

for (let i = 5; i > 0; i--) {                       //this is the same but in reverse
    console.log(i);                                     //output 5, 4, 3, 2, 1
};

//-----0-index based conter-----

//This is a counter that starts at 0 as apposed to 1, this can throw people off
//because the counter starts at 0 it will run 3 times before it is over 1

for (let i = 0; ; i++) {                            //setting the for loop to run on a counter that starts at 0
    console.log("loop, i = " + i);                      //printing the value of the counter
    if (i > 1) break;                                   //breaking the counter if the value is above 1
}                                                   //this loop with print 3 times because the console.log is before the break if

//-----The infinite for loop-----

//for(;;) console.log("hi");                        //This will loop forever and ever and ever and ever and ever and ever and ever and ever and ever and ever and ever and ever..... 

//-----Multiple statements-----

let counter = 0;                                    //sets the var counter to 0               
function inc() { counter++; };                      //create a function called inc that increments the counter var by 1
for (let i = 0; i < 10; i++, inc());                //set i as 0, if i is less than 10 run, increment i by 1, run inc function
console.log(counter);                               //once the for loop is finished conter var will have incremented 10 times 

//-----Incrementing numbers

//You can use a for loop to increment a number value by a set ammount
//this for loop increases the counter var by 10 and then stops

counter = 0;                                        //sets counter var to 0
console.log(counter);                               //printing counter var (result = 0)

for (let i = 0; i < 10; i++) {                      //sets i var to 0, if i is less than 10 run, increment i by 1
    counter++;                                          //increment counter var by 1
};               

console.log(counter);                               //print counter var (result = 10)

//-----For loops and let scope-----

// for (var i = 0; i < 10; i++) let x = i;          //this line of code would throw an error because the let variable has not had its scope defined

for (var i = 0; i < 10; i++) { let x = i; };        //this is the correct way of doing it

//-----Nested for loops-----

//in js you are able to nest loops within other loops, preventing the parent loop from running until the child loop is finished
//this is a 2D loop
for (let y = 0; y < 2; y++){                        //first loop will run as long as y is less than 2 (twice)
    for (let x = 0; x < 2; x++){                        //second child loop will do the same
        console.log(x, y);                                  //output 0 0, 1 0, 0 1, 1 1
    };
};
//Steps of ^ loop output
//1. child and parent 1st run[x = 0, y = 0] 
//2. child increase by 1 [x = 1, y = 0] 
//3. child finished and rest, parent increased by 1 [x = 0, y = 1] 
//4. child increased by 1[x = 1, y = 1]
//end loop

//this 3D loop is identical but with an additional child
//tf you cange the x < 2 to x < 10 along with the other vars (y, z) you will get a 3 digit counter that will count from 000 to 999
//i have not done this because the output log would be very long

for (x = 0; x < 2; x++){
    for (let y = 0; y < 2; y++){
        for (let z = 0; z < 2; z++){
            console.log(x, y, z);
        };
    };
};

//-----Loop length-----

//in js it is important to define when a loop should end, if you dont it will run infinitly 

//-----Skipping steps-----

//you can skip itterations of a for loop by using "continue", this can be combine with if statements
for (let i = 0; i < 3; i++) {                       
    if (i == 1) continue;                           //if i is equal to 1 then skip proceding code and start the next itteration
    console.log(i);                                 //output 0, 2    js skipped the itteration that would print 1
};

//-----Breaking early-----

//loops can be set to run until they are broken by adding an empty ;; in the condition
for (let i = 0; ; i++) {                            //sets i var to 0, sets to run until loop is broken 
    console.log("loop");                            //print loop
    break;                                          //breaks/ ends loop
};

//-----Breaking to a label-----

//js allows for labeling
//adding a label assigins that label name to the following statement 
//you can use this to label from inside a nested loop to break parent loops 

let c = 0;                                          //setting c var to 0

outer: for (let i = 0; i < 5; i++) {                 //labeling loop "outer" and running as long as i is less than 5 (and incremeting it each itteration)
    inner: for (let j = 0; j < 5; j++) {                //labeling the nested loop inner and running 5 times with a diffrent var so its condition dosnt interfear with its parent
        c++;                                                //itterating c var by 1
        if (i == 2) {                                       //if the i var in the condition for the outer loop is equal to 2
            break outer                                          //break/ end the outer loop
        };
    };
}
console.log(c);                                     //output = 11
//outer loop ran 3 times, inner loop ran 5 times each time the outer ran and on the 3rd outer itteration it ended after itterating c by 1 so 5*2+1 = 11

//the second example is the same as the first but it skips the 3rd outer itteration after adding 1 to c

c = 0;
outer: for (let i = 0; i < 5; i++) {
    inner: for (let j = 0; j < 5; j++) {
        c++;
        if (i == 2) {
            break inner
        };
    };
}
console.log(c);                                     //output 21
//outer loop ran 5 times and skipped the 3rd run after itterating c by 1, inner loop ran 5 times each time outer ran except on the 3rd run so 5*4+1 = 21 


//-----Breaking from a labeled non for-loop scope-----

//you can also use a label without asigning a statement and instead use it as a container
//it can be broken/ ended in the same way as shown previously

block: {
    console.log("before");
    break block;
    console.log("after");
};

//-----For ..of loop-----

//

function* funk() {
    yield 72;
    yield 64;
    yield 48;
    yield 99;
    yield 111;
};
for (let value of funk() ){
    console.log(value);
};

//-----For ..of loops and strings-----

let string = 'this is text in a string';
for (let value of string) {
    console.log(value);
};

//-----For ..of loops and arrays-----

let array = [0, 1, 2];

for ( let value of array ) {
    console.log( value );
};

//-----For ..of loops and objects-----

let obj = { 
    a: 1,
    b: 2,
    c: 3 
};
for (let value of Object.keys(obj) ) {
    console.log(obj);
};
for (let value of Object.values(obj) ) {
    console.log(obj);
};
for (let value of Object.entries(obj) ) {
    console.log(obj);
};