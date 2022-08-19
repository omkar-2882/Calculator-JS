var expression = "";
var temp = "";
var ans = "";

function ev() {
    console.log(expression);
    if(expression.length==0){
        document.getElementById("exp").value = ans;
    }
    // const val = document.getElementById("exp").value;
    else{
        ans = eval(expression);
        document.getElementById("exp").value = ans;
        expression = "";
        temp = "";
    }
}
function wrt(id) {
    if(id=="div"){
        const val = document.getElementById(id).innerHTML;
        expression = expression.concat("/");
        temp = temp.concat(val);
        document.getElementById("exp").value = temp;
    }
    else if(id=="mul"){
        const val = document.getElementById(id).innerHTML;
        expression = expression.concat("*");
        temp = temp.concat(val);
        document.getElementById("exp").value = temp;
    }
    else{
        const val = document.getElementById(id).innerHTML;

        if(val == "AC")
        {
            expression = "";
            temp = "";
            document.getElementById("exp").value = temp;
        }
        else if (val == "CE") {
            expression = expression.slice(0,-1);
            temp = temp.slice(0,-1);
            document.getElementById("exp").value = temp;
        }
        else{
            expression = expression.concat(val);
            temp = temp.concat(val);
            document.getElementById("exp").value = temp;
        }
    }
    console.log(expression);
}
