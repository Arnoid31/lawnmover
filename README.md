# lawnmover

Exercise in node.js/ES6. Tried to avoid using if statements by doing class polymorphism. Was fun.

## aim
In this exercise, we want to mow a garden with one or more lawnmovers.
Garden & lawnmovers are described in files (see below).
A lawnmover cannot get out of the garden.
In case of two lawnmovers hitting each other, this is not specified, so it will be ignored. I think it's a trap.


## installation
Do not forget to run :

    npm i


## usage
Package.json contains already an example :

    npm start

For using this script with files :

    node main.js relative/path/to/file


## files structure example

    5 5
    1 2 N
    GAGAGAGAA
    3 3 E
    AADAADADDA

Where:
-> First line is the size of the garden
-> Second is initial position and orientation of the first lawnmover. Orientation can be N (north), E (east), W (west) and S (south)
-> Third line is the steps the lawnmover will accomplish. G is turn left, A is move ahead, D is turn right.
-> Fourth is initial position of a second lawnmover, fifth its steps, and it can continues again and again
