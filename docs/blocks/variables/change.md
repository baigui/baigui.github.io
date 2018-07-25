# Change Value

Set the value for local and global variables.

## ~ hint

You can use the assignment operator with variables of each of the supported [types](/types).

## ~

Change the value of a variable

```block
let x = 0
x += 2
```

## Declare a variable

Use the assignment operator to set the value of a [variable](/blocks/variables/var). Change the value of a variable from 1 to 3 using the change block. Like this:

```block
let x = 1
x += 2
```

##  #examples

## Example: show the value of a variable

Use the assignment operator to set the value of a [variable](/blocks/variables/var). Change the value of a variable from 0 to 1 using the change item block. Then display the new value of the variable on the LED screen. Like this:

```blocks
let x = 0;
x += 1;
basic.showNumber(x);
```

