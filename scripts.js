
function main() {
    
    var myCar = {
        color: 'green',
        make: 'Holden',
        model: 'Commodore VX'
    }
    
    
    // Exercise #1
    // Change the color of the car and then display on the screen the color, make and model of the car object
    
    
    // Exercise #2
    // Create a new object called 'wheel' and give it the properties; diameter, treadWidth and brand
    
    
    // Exercise #3
    // Add a new property to the car object named 'wheels' of type Array and add four wheels to it
    
    
    // Exercise #4
    // Create and call a function that takes a 'car' object as a parameter and outputs the make and model combined as one string
    
    
    
    // Exercise #5
    // Create and call a function that takes a 'car' object as a parameter and outputs all the wheel brands to the screen
    
    
        
}

function outputLine(line) {
    
    var output = document.getElementById('output');
        
    var currentHtml = output.innerHTML;
    
    var newHtml = currentHtml + line + '<br />';
    
    output.innerHTML = newHtml;
    
}