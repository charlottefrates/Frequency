var statement = "The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog The";
var array     = statement.toLowerCase().split(' '); /* parses the words by space delimiter into an array output==> array[19] such that 0:"The", 1: "quick"....18:"The"*/

var counts    = {};

/* this loop counts the number of occurances of each word output ==>Object {the: 5, quick: 2, brown: 2, fox: 2, jumps: 2…} */
for (var i = 0 ;i<array.length;i++){
     if(!counts[array[i]])
     counts[array[i]] = 0;
     ++ counts[array[i]];
};


/* this loop finds the maximum frequency in the counts from the previous array */

var maxCount  = -1;
var finalKey;

Object.keys(counts).forEach(function (key){
     if (maxCount < counts[key]){
     maxCount = counts[key];
     finalKey = key;

}
});

console.log (counts)
console.log ("The array with the max count is " + "''" + finalKey +"''")
