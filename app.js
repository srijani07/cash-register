var billAmount = document.querySelector("#bill-amount");
var paidAmount = document.querySelector("#paid-amount");
var outputArea = document.querySelector(".output-area");
var billCheck = document.querySelector("#bill-enter");
var givenArea = document.querySelector("#given-amount");
var btnCheck = document.querySelector("#check-btn")
var paidArea = document.querySelector(".paid-area")
var angryImg = document.querySelector("#angry-img")
paidArea.style.display = "none";
angryImg.style.display = "none";

function billHandler() { //checks the entered bill amount


    if(billAmount.value === "" || parseInt(billAmount.value) <=0 ) {
        outputArea.innerHTML = "Please enter correct bill amount."
    }

    else {
paidArea.style.display = "block";
billCheck.style.display = "none";
}
}

function clickHandler() {
    var paidAmount = document.querySelector("#paid-amount");
    

    //checks if the input paid amount is at least 1 and is a number
if(parseInt(paidAmount.value) <= 0 || paidAmount.value ==="" || parseInt(billAmount.value) <= 0 || billAmount.value === "") {
    outputArea.innerHTML = "Please enter appropriate bill amount and/or given cash amount."
}


else if(parseInt(billAmount.value) === parseInt(paidAmount.value)) {
    outputArea.innerHTML = "No return needed."

}

else if(parseInt(billAmount.value) > parseInt(paidAmount.value)) {
 outputArea.innerHTML = "<br>No return needed. Customer has to pay Rs."+(parseInt(billAmount.value) - parseInt(paidAmount.value))+" more."
 angryImg.style.display = "block";
}

else {
    angryImg.style.display = "none";
var change = parseInt(paidAmount.value)-parseInt(billAmount.value);
var notes = [2000,1000,500,200,100,50,20,10,5,2,1];
var frequency = [];

for(var i=0;i<notes.length;i++) {
frequency[i] = Math.floor(change/notes[i]);
change=change%notes[i];
}

for(var i=0;i<frequency.length;i++) { 
    if(frequency[i] === 0) {
        frequency[i] = "";
    }
}

//creating the table
outputArea.innerHTML = "<table><tr><td>Denomination</td><td>"+notes[0]+"</td><td>"+notes[1]+"</td><td>"+notes[2]+"</td><td>"+notes[3]+"</td><td>"+notes[4]+"</td><td>"+notes[5]+"</td><td>"+notes[6]+"</td><td>"+notes[7]+"</td><td>"+notes[8]+"</td><td>"+notes[9]+"</td><td>"+notes[10]+"</tr><tr>"+"<td>Number of notes </td><td>"+frequency[0]+"</td><td>"+frequency[1]+"</td><td>"+frequency[2]+"</td><td>"+frequency[3]+"</td><td>"+frequency[4]+"</td><td>"+frequency[5]+"</td><td>"+frequency[6]+"</td><td>"+frequency[7]+"</td><td>"+frequency[8]+"</td><td>"+frequency[9]+"</td><td>"+frequency[10]+"</td></tr></table><br/>";


}
}


billCheck.addEventListener("click",billHandler);
btnCheck.addEventListener("click",clickHandler);
