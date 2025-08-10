let calcScreen = document.getElementById("calc-screen");
btns = document.querySelectorAll("button");

let string = "";

for(btn of btns){
    btn.addEventListener("click", (e)=> {
        if(e.target.innerHTML == "="){
            string = eval(string);
            calcScreen.value = string;
        }

        else if(e.target.innerHTML == "AC"){
            string = "";
            calcScreen.value = string;
        }

        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0, string.length-1);
            calcScreen.value = string;
        }

        else{
            string += e.target.innerHTML;
            calcScreen.value = string;
        }
    });
 
}