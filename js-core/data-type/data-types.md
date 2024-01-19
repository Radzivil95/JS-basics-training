# Data types

There are eight basic data types in JavaScript. Here, we’ll cover them in general and in the next chapters we’ll talk about each of them in detail.

#### Number
Example:
let n = 123;

Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.
Infinity - represents the mathematical Infinity ∞. It is a special value that’s greater than any number.
NaN - represents a computational error. It is a result of an incorrect or an undefined mathematical operation.
NaN is sticky. Any further mathematical operation on NaN returns NaN

#### BigInt
In JavaScript, the “number” type cannot safely represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives.
To be really precise, the “number” type can store larger integers (up to 1.7976931348623157 * 10308), but outside of the safe integer range ±(253-1) there’ll be a precision error, because not all digits fit into the fixed 64-bit storage. So an “approximate” value may be stored.

A BigInt value is created by appending n to the end of an intege:
Example:
const bigInt = 1234567890123456789012345678901234567890n;

#### String
A string in JavaScript must be surrounded by quotes.
Example:
let str = "Hello";

In JavaScript, there are 3 types of quotes:
-- Double quotes: "Hello".
-- Single quotes: 'Hello'.
-- Backticks: `Hello`.

Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.
Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}.

#### Boolean
The boolean type has only two values: true and false.
This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.
Example:
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

#### Null

In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
It’s just a special value which represents “nothing”, “empty” or “value unknown”.
Example:
let name = null;

#### Undefined
The special value undefined also stands apart. It makes a type of its own, just like null.
The meaning of undefined is “value is not assigned”.
Example:
let age;
alert(age); // shows "undefined"

#### Symbols
The symbol type is used to create unique identifiers for objects.

#### Objects
The object type is special.
All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.


#### Summary

There are 8 basic data types in JavaScript.

Seven primitive data types:
number - for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
bigint - for integer numbers of arbitrary length.
string - for strings. A string may have zero or more characters, there’s no separate single-character type.
boolean - for true/false.
null - for unknown values – a standalone type that has a single value null.
undefined - for unassigned values – a standalone type that has a single value undefined.
symbol - for unique identifiers.
And one non-primitive data type:
object - for more complex data structures.