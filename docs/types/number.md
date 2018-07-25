# Number

An integer number.

## @parent blocks/language

A *Number* is an integer such as `42` or `-42`. More precisely, a *Number* is a signed 32-bit integer (an integer value that contains a positive or negative sign as part of it's information).

## Declare a number variable

You can assign a number to a variable:

###  #declareexample

```block
let num = 42;
basic.showNumber(42);
```

## Arithmetic operators

The following arithmetic operators work on numbers and return a [Number](/types/number):

*  addition: `1 + 3`
* subtraction: `1 - 3 `
* multiplication: `3 * 2`
* integer division: `7 / 3`
* modulo is available through the [math library](/blocks/math)

## Relational operators

The following relational operators work on numbers and return a [Boolean](/blocks/logic/boolean):

* equality: `(3 + 1) = 4`
* inequality: `3 != 4`
* less or equal than: `3 <= 4`
* less than: `3 < 4`
* greater or equal than : `4 >= 3`
* greater than: `4 > 3`

## Show number #print

The [show number](/reference/basic/show-number) function displays a number on the [LED screen](/device/screen). 
For example, this code displays the number 42:

```block
basic.showNumber(42);
```

## Functions that return a number

Some functions return a number, which you can store in a variable. 

###  #functionreturnexample

For example the following code gets the display brightness 
(using the [brightness function](/reference/led/brightness)) and stores the value in a variable named `brightness`:

```block
let brightness = led.brightness()
```

## Math functions

The [math library](/blocks/math) includes math related functions. 
For example, the `absolute` function returns the returns the absolute value of input parameter `x`:

```block
let abs = Math.min(-42, 1000);
```

## See also

[math](/blocks/math), [var](/blocks/variables/var), [Boolean](/blocks/logic/boolean)

