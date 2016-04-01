
function main() {
    
    var myCar = {
        color: 'green',
        make: 'Holden',
        model: 'Commodore VX'
    }
    
    
    // Exercise #1
    // Change the color of the car and then display on the screen the color, make and model of the car object
    myCar.color = 'blue';
    outputLine(myCar.color);
    outputLine(myCar.make);
    outputLine(myCar.model);
    
    // Exercise #2
    // Create a new object called 'wheel' and give it the properties; diameter, treadWidth and brand
    var wheel = {
        diameter: 32,
        treadWidth: 100,
        brand: 'Bridgestone'
    }
    
    // Exercise #3
    // Add a new property to the car object named 'wheels' of type Array and add four wheels to it
    var myCar = {
        color: 'green',
        make: 'Holden',
        model: 'Commodore VX',
        wheels: [
            {
                diameter: 32,
                treadWidth: 100,
                brand: 'Bridgestone'
            },
            {
                diameter: 32,
                treadWidth: 100,
                brand: 'Bridgestone'
            },
            {
                diameter: 32,
                treadWidth: 100,
                brand: 'Bridgestone'
            },
            {
                diameter: 32,
                treadWidth: 100,
                brand: 'Bridgestone'
            },
        ]
    }
    
    // Exercise #4
    // Create and call a function that takes a 'car' object as a parameter and outputs the make and model combined as one string
    var displayCarMakeModel = function(car) {
        outputLine(car.make + ' ' + car.model)
    }
    
    displayCarMakeModel(myCar);
    
    
    // Exercise #5
    // Create and call a function that takes a 'car' object as a parameter and outputs all the wheel brands to the screen
    var displayWheelbrands = function(car) {
        
        for (var i = 0; i < car.wheels.length; i++) {
            outputLine(car.wheels[i].brand);
        }
        
    }
    
    displayWheelbrands(myCar)
    
    
    // Exercise #6
    // For this exercise we want to acheive the same result as in exercise 5 but this time we want to put the function on the 'car' object itself. example function call:
    // myCar.displayWheelBrands();
    var myCar = {
        color: 'green',
        make: 'Holden',
        model: 'Commodore VX',
        wheels: [
            {
                diameter: 32,
                treadWidth: 100,
                brand: 'Bridgestone'
            },
            {
                diameter: 32,
                treadWidth: 100,
                brand: 'Bridgestone'
            },
            {
                diameter: 32,
                treadWidth: 100,
                brand: 'Bridgestone'
            },
            {
                diameter: 32,
                treadWidth: 100,
                brand: 'Bridgestone'
            },
        ],
        displayWheelBrands: function() {
            
            for (var i = 0; i < this.wheels.length; i++) {
                outputLine(this.wheels[i].brand);
            }
            
        }
    }
    
    myCar.displayWheelBrands();
    
    
    // Exercise #7
    // Create two methods (function which does not return a value) on the 'car' object. 
    // The first addWheel(wheel) - which accepts a 'wheel' object paramter and adds it to the cars wheel array
    // The second removeWheel() - which removes the last wheel in the cars wheel array
    // Now, add a wheel to the car using the method you created and then remove that wheel
    // RESOURCES: http://www.w3schools.com/js/js_array_methods.asp (PUSH and POP)
    var myCar = {
        color: 'green',
        make: 'Holden',
        model: 'Commodore VX',
        wheels: [
            {
                diameter: 32,
                treadWidth: 100,
                brand: 'Bridgestone'
            },
            {
                diameter: 32,
                treadWidth: 100,
                brand: 'Bridgestone'
            },
            {
                diameter: 32,
                treadWidth: 100,
                brand: 'Bridgestone'
            },
            {
                diameter: 32,
                treadWidth: 100,
                brand: 'Bridgestone'
            },
        ],
        addWheel: function(wheel) {
            this.wheels.push(wheel);
        },
        removeWheel: function() {
            this.wheels.pop();
        }
    }
    
    myCar.addWheel({ diameter: 32, treadWidth: 100, brand: 'Bridgestone' });
    myCar.removeWheel();    
    
    
}

function outputLine(line) {
    
    var output = document.getElementById('output');
        
    var currentHtml = output.innerHTML;
    
    var newHtml = currentHtml + line + '<br />';
    
    output.innerHTML = newHtml;
    
}