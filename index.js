//-----Loops-----

//--layout

//for (initialize; condition; increment);
//for (initialize; condition; increment) single statement;
//for (initialize; condition; increment) { multiple; statements; }

//A for loop is a operator that will run and then start over as long as its argument remains true

for (let i = 1; i < 6; i++) {                       //this for loop will output the value of the counter in its argument
    console.log(i);                                 //output 1, 2, 3, 4, 5
};

for (let i = 5; i > 0; i--) {                       //this is the same but in reverse
    console.log(i);                                 //output 5, 4, 3, 2, 1
};

//-----0-index based conter-----

//This is a counter that starts at 0 as apposed to 1, this can throw people off
//because the counter starts at 0 it will run 3 times before it is over 1

for (let i = 0; ; i++) {                            //setting the for loop to run on a counter that starts at 0
    console.log("loop, i = " + i);                  //printing the value of the counter
    if (i > 1) break;                               //breaking the counter if the value is above 1
}                                                   //this loop with print 3 times because the console.log is before the break if

//-----The infinite for loop-----

//for(;;) console.log("hi");                        //This will loop forever and ever and ever and ever and ever and ever and ever and ever and ever and ever and ever and ever..... 

//-----Multiple statements-----

let counter = 0;                                    //sets the var counter to 0               
function inc() { counter++; };                      //create a function called inc that increments the counter var by 1
for (let i = 0; i < 10; i++, inc());                //set i as 0, if i is less than 10 run, increment i by 1, run inc function
console.log(counter);                               //once the for loop is finished conter var will have incremented 10 times 

//-----Incrementing numbers
/*
counter = 0;                                        //set counter var to 0
for (let i = 0; i < 10; i++){
    counter++;
    counter+;
    };
    */
//-----For loops and (let) scope-----

// for (var i = 0; i < 10; i++) let x = i;         

for (var i = 0; i < 10; i++) { let x = i; }

//-----Nested for loops-----

for (let y = 0; y < 2; y++)
    for (let x = 0; x < 2; x++)
        console.log(x, y);

for (x = 0; x < 2; x++)
    for (let y = 0; y < 2; y++)
        for (let z = 0; z < 2; z++)
            console.log(x, y, z);

//-----Skipping steps-----


for (let i = 0; i < 3; i++) {
    if (i == 1) continue;
    console.log(i);
};

//-----Breaking early-----

for (let i = 0; ; i++) { console.log(" loop"); break; };

//-----Breaking to a label-----

let c = 0;
mark: for (let i = 0; i < 5; i++) {
    inner: for (let j = 0; j < 5; j++) {
        c++;
        if (i == 2) {
            break mark
        };
    };
}
console.log(c);

c = 0;
mark: for (let i = 0; i < 5; i++) {
    inner: for (let j = 0; j < 5; j++) {
        c++;
        if (i == 2) {
            break inner
        };
    };
}
console.log(c);

//-----Breaking from a labeled non for-loop scope-----

block: {
    console.log("before");
    break block;
    console.log("after");
};

//-----For ..of loop-----

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