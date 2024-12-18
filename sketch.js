const container = document.querySelector("#container");

function drawGrid(size = 16) {
    for(j = 0; j<= size; j++) {
        for(i = 0; i <= size; i++) {
            let newDiv = document.createElement("div");
            newDiv.classList = "square";
            container.appendChild(newDiv);
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

drawGrid();

const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
    square.addEventListener('mouseenter', (event) => {
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
});


