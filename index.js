//-----Loops-----

//layout
//for (initialize; condition; increment);
//for (initialize; condition; increment) single statement;
//for (initialize; condition; increment) { multiple; statements; }

//A for loop is a operator that will run and then start over as long as its argument remains true

for (let i=1;i<6;i++) {                             //this for loop will output the value of the counter in its argument
    console.log(i);                                 //output 1, 2, 3, 4, 5
};

for (let i=5;i>0;i--) {                             //this is the same but in reverse
    console.log(i);                                 //output 5, 4, 3, 2, 1
};

//-----0-index based conter-----

for (let i=0;;i++) {
    console.log("loop, i = "+i);
    if(i>1) break;
}

//-----The infinite for loop-----

//for(;;) console.log("hi");                        //This will loop forever 

//-----Multiple statements-----

let counter = 0;
function inc(){counter++;}for(let i=0;i<10;i++,inc()); 
console.log(counter);

//-----Incrementing numbers

counter = 0;
//for (let i = 0; i < 10; i++) counter++;counter+;

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
            console.log(x,y,z);

//-----Skipping steps-----


for (let i = 0; i < 3; i++) { if (i == 1) continue;
    console.log(i); };

//-----Breaking early-----

for (let i = 0;; i++) { console.log(" loop"); break; };

