const container = document.querySelector("#container");

function drawGrid(size = 16) {
    let style = window.getComputedStyle(container);
    let grid = style.getPropertyValue("width");
    grid = Number(grid.replace("px", ""));
    let squareSize = grid/size;
    console.log(`${squareSize} ${grid}`);
    //kill the old children
    container.replaceChildren();

    for(j = 0; j< size; j++) {
        for(i = 0; i < size; i++) {
            let square = document.createElement("div"); 
            square.classList.add("square");
            square.style.height = `${squareSize}px`;
            square.style.width = `${squareSize}px`;

            square.addEventListener("mouseenter", (event) => {
                const target = event.target;
        
                //get the opacity so when can determine if we need to darken it or get a new color.
                const style = window.getComputedStyle(target);
                const opacity = style.getPropertyValue("opacity");
        
                if(Number(opacity) === 1) {
                    square.style.background = getRandomHexCode();
                    square.style.opacity = 0.1;
                } else {
                    square.style.opacity = Number(opacity) + 0.1;
                }
            });

            container.appendChild(square);
        };
    };
};

function getRandomHexCode() {
    // Generate a random number between 0 and 255 for each color channel
    const randomColor = () => Math.floor(Math.random() * 256);

    // Combine red, green, and blue values
    const red = randomColor();
    const green = randomColor();
    const blue = randomColor();

    // Return the rgb color
    return `rgb(${red} ${green} ${blue})`;
}

const sizer = document.querySelector("#sizer");

sizer.addEventListener("click", () => {
    let size;
    
    // Continuously prompt until a valid input is entered
    while (true) {
        size = prompt("Enter a new grid size less than 100.");
        // Check if size is valid: a number, less than 100, and greater than 0
        if (size !== null && !isNaN(size) && size > 0 && size <= 100) {
            size = Math.floor(Number(size)); // Ensure it's an integer
            drawGrid(size);
            break; 
        } else {
            alert("Invalid input! Please enter a number between 1 and 100.");
        }
    }
})

drawGrid();