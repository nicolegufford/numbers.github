// Create a for loop that shows all powers of 2 from 1 to 256.
//b. Create a new folder in your github repo.
//c. Create an index.html file and myScripts.js file in that repo.
//d. Attach the myScripts.js to the index.html file

for(var x = 0; x <= 8; x++){ 
var y = Math.pow(2,x); 
document.write(y + "<br />") 
}
