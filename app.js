var billAmount = document.querySelector("#bill-amount");
var paidAmount = document.querySelector("#paid-amount");
var btnCheck = document.querySelector("#check-btn");
var outputArea = document.querySelector("#output-area");

var outputTable = document.querySelector("#output-table")
function clickHandler() {
if(parseInt(billAmount.value) <=0 || parseInt(paidAmount.value) <= 0) {
    outputArea.innerHTML = "Please enter appropriate input."
}

else if(parseInt(billAmount.value) === parseInt(paidAmount.value)) {
    outputArea.innerHTML = "No return needed."

}

else if(parseInt(billAmount.value) > parseInt(paidAmount.value)) {
 outputArea.innerHTML = "No return needed. Customer has to pay Rs."+(parseInt(billAmount.value) - parseInt(paidAmount.value))+" more."
}

else {
var change = parseInt(paidAmount.value)-parseInt(billAmount.value);
outputArea.innerHTML="Total change : "+change+ "<br/>";
console.log(change);
var notes = [2000,1000,500,100,50,20,10,5,2,1];
var frequency = [];

for(var i=0;i<notes.length;i++) {
frequency[i] = Math.floor(change/notes[i]);
change=change%notes[i];
}


    var output="";
    for(var i=0;i<notes.length;i++) {
        if(frequency[i] !== 0)
        outputArea.innerHTML+="Rs."+notes[i]+" : "+frequency[i]+" note(s)<br/>";
        }
        console.log(output);
    


}
}

btnCheck.addEventListener("click",clickHandler);



