const sketchContainer = document.querySelector(".sketch-container");
console.log(sketchContainer);

let sketchDivs;

const sizeButton = document.querySelector(".size-choice");

sizeButton.addEventListener("click", (e)=>{
    if(sketchDivs){sketchDivs.forEach(div => {
        div.remove();
        })};
        
    
    let size = +prompt("Enter your desired size per side, between 1 & 100")
   if(size > 0 && size <= 100) 
    {
      createSketchArea(size)
    } else {
        alert("Faulty value entered");
    }
   ; 

})

function createSketchArea(size){
    let numberOfSquares = size**2;
    
    for(let i = 0;i < numberOfSquares; i++){
        let newDiv = document.createElement("div");
        newDiv.classList.add("sketch-div");
        newDiv.style.width = `${600/size}px`;
        newDiv.style.height = `${600/size}px`;
        sketchContainer.appendChild(newDiv);
    }

    sketchContainer.addEventListener("mouseover", (e)=>{
          
         e.target.style.backgroundColor = `rgb(${255*Math.random()},${255*Math.random()},${255*Math.random()})`;
         });
    sketchDivs = document.querySelectorAll(".sketch-div");
    // sketchDivs.forEach(div => {
    //     div.addEventListener("mouseover", (e)=>{
          
    //       e.target.style.backgroundColor = `rgb(${255*Math.random()},${255*Math.random()},${255*Math.random()})`;
    //     })
        
    // });
};




