const xs = [1, 2, 3, 4, 5];

// pure
xs.slice(0, 3); // [1,2,3]

xs.slice(0, 3); // [1,2,3]

xs.slice(0, 3); // [1,2,3]


// impure
xs.splice(0, 3); // [1,2,3]

xs.splice(0, 3); // [4,5]

xs.splice(0, 3); // []