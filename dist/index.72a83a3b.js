document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button)=>{
        button.addEventListener("click", ()=>{
            const buttonValue = button.textContent;
            // Se il pulsante è un numero o un punto decimale
            if (!isNaN(buttonValue) || buttonValue === ".") console.log(buttonValue);
        });
    });
});

//# sourceMappingURL=index.72a83a3b.js.map
