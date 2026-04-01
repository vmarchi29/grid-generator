let create = document.getElementById("create");
let grid = document.getElementById("grid");
let clear = document.getElementById("clear");
let currentx=false;
create.addEventListener("click", () => {
    let width = Number(document.getElementById("width").value);
    let height = Number(document.getElementById("height").value);
    grid.innerHTML = "";

    for (let i = 0; i < height; i++) {
        let rowdiv = document.createElement("div");
        rowdiv.style.display = "flex";
        for (let j = 0; j < width; j++) {
            let box = document.createElement("div");
            box.classList.add("box");

            box.addEventListener("click", () => {
                let color = document.getElementById("color").value;
                box.style.color = color;

                if (box.textContent === "X") {
                    box.textContent = "";
                } else if(box.textContent==="X"&&currentx==false){
                    box.textContent = "Y";
                }
                else if(box.textContent==="Y"){
                    box.textContent="";
                }
                else if(box.textContent===""&&currentx==false){
                    box.textContent="X";
                    currentx=true;
                }else if(box.textContent===""&&currentx){
                    let color2 = document.getElementById("color2").value;
                    box.style.color=color2;
                    box.textContent="Y";
                    currentx=false;
                }
            });
            clear.addEventListener("click",()=>{
    box.textContent="";
})

            rowdiv.appendChild(box);
        }
        grid.appendChild(rowdiv);
    }
});

