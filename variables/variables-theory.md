# Variables
Variables - is a “named storage” for data. We can use variables to store goodies, visitors, and other data.

To create a variable in JavaScript, use the **let**, **const**, ~~**var**~~ keyword.
We can put some data into it by using the assignment operator =;

#### Example
let: messages;
const: pi = 3.14;

### A real-life analogy
We can easily grasp the concept of a “variable” if we imagine it as a “box” for data, with a uniquely-named sticker on it.

### Variable naming
There are two limitations on variable names in JavaScript:
-- The name must contain only letters, digits, or the symbols $ and _.
-- The first character must not be a digit.

### Constants
To declare a constant (unchanging) variable, use const instead of let.

#### Example
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";

### Some good-to-follow rules are:

Use human-readable names like userName or shoppingCart.
Stay away from abbreviations or short names like a, b, c, unless you really know what you’re doing.
Make names maximally descriptive and concise. Examples of bad names are data and value. Such names say nothing. It’s only okay to use them if the context of the code makes it exceptionally obvious which data or value the variable is referencing.
Agree on terms within your team and in your own mind. If a site visitor is called a “user” then we should name related variables currentUser or newUser instead of currentVisitor or newManInTown.