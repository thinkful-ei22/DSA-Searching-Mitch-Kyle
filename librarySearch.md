# Find a book

> Imagine you are looking for a book in a library with a Dewey Decimal index. How would you go about it? Can you express this process as a searching algorithm?

1. Look at signs on end of bookshelves
    1. if the book's index in within the range listed on the sign, look on that aisle
    2. if the book's index is less than the range listed on the sign, look in the direction of the smaller numbers
    3. if the book's index is greater than the range listed on the sign, look in the direction of the bigger numbers
2. Once you find the correct bookshelf
    1. look at a random index from a book on each shelf
    2. if it's lower than the one you're looking for, keep going
    3. if it's higher than the one you're looking for, back up one shelf
3. Once you find the correct shelf on the shelving unit, search one by one until the book is found.