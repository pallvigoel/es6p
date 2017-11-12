"use strict"
var batch = "UCA2018";
let batch2 = "UCA2019";
var student = [];
function myFunction(action) {
    var name = document.getElementById("name").value;
    var rollno = document.getElementById("rollno").value;
    var passoutyear = document.getElementById("passoutyear").value;
    var stream = document.getElementById("stream").value;
    var table = document.getElementById("myTable");
    var rowCount = table.rows.length;
    var f=0;
   
if(f==0){

    if (((name == parseInt(name)))) {
        alert("Wrong Value Entered");
    }
    else if (rollno != parseInt(rollno)) {
        alert("Wrong Value Entered");
    }
    else if (passoutyear != parseInt(passoutyear)) {
        alert("Wrong Value Entered");
    }
    else if (name == null || name == "", rollno == null || rollno == "", passoutyear == null || passoutyear == "", stream == null || stream == "") {
        alert("Please Fill All Required Field");
        return false;
    }


    else if (rollno.toString().length < 10 || rollno.toString().length > 10) {

        alert("length of rollno is not defined");
    }


    else {

        var table = document.getElementById("myTable");
        var row = table.insertRow();
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);


        var element1 = document.createElement("input");
        element1.type = "checkbox";
        element1.name = "chkbox[]";
        cell0.appendChild(element1);
        cell1.innerHTML = document.getElementById("name").value;
        cell2.innerHTML = document.getElementById("rollno").value;


        cell3.innerHTML = document.getElementById("passoutyear").value;

        cell4.innerHTML = document.getElementById("stream").value;


        var obj = { name: name, rollno: rollno, passoutyear: passoutyear, stream: stream };
        student.push(obj);
        blankcells();

    }
}
}

function studentdetail() {
    
  var t=parseInt(prompt("enter"));
    var table = document.getElementById("myTable");
    var rowCount = table.rows.length;
    var f=0;
for (var i = 1; i < rowCount; i++) {
        var row = table.rows[i];
        var e= row.childNodes[2].innerHTML;
        if(e!=t){
            
                row.style.display="none";
        }
       if(e==t){
       f=1;
       }
}
if(f==0){
    alert("data does not exists");
} 
else{
    hide();
}
}
function hide2(){
    
    document.getElementById("student").style.display="none";
    document.getElementById("button1").style.display="none"; 
    document.getElementById("mytable").style.padding="50px 10px 20px 30px";
    
}
function hide(){
    document.getElementById("student").style.display="none";
    document.getElementById("button1").style.display="none";     
}
function show(){
    document.getElementById("student").style.display="block";
    document.getElementById("button1").style.display="block";
}
function blankcells() {
    document.getElementById("name").value = " ";

    document.getElementById("rollno").value = " ";
    document.getElementById("passoutyear").value = " ";
    document.getElementById("stream").value = " ";
}
function deleteall() {
    var table = document.getElementById("myTable");
    var rowCount = table.rows.length;

    for (var i = 1; i < rowCount; i++) {
        var row = table.rows[i];
        row.cells[0].childNodes[0].checked = true;
        //document.write(row.cells[i].childnodes[0]);
    }
    deleteRow();
}

function deleteRow() {
    var table = document.getElementById("myTable");
    var rowCount = table.rows.length;

    for (var i = 1; i < rowCount; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[0].childNodes[0];
        if (null != chkbox && true == chkbox.checked) {
            if (rowCount <= 1) {
                alert("Cannot delete all the rows.");
                break;
            }
            table.deleteRow(i);
            rowCount--;
            i--;
        }
    }
}
function editRow() {
    var table = document.getElementById("myTable");
    var rowCount = document.getElementById("myTable").rows.length;


    for (var i = 1; i < rowCount; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[0].childNodes[0];
        if (null != chkbox && true == chkbox.checked) {
            if (rowCount <= 1) {
                alert("Cannot edit the rows.");
                break;
            }

            row.cells[1].innerHTML = document.getElementById("name").value;
            row.cells[2].innerHTML = document.getElementById("rollno").value;
            row.cells[3].innerHTML = document.getElementById("passoutyear").value;
            row.cells[4].innerHTML = document.getElementById("stream").value;
            rowCount--;
            i--;
        }
    }
}


