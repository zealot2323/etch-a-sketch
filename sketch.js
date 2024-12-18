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

drawGrid();