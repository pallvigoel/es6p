"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var batch = "UCA2018";
var batch2 = "UCA2019";

var student = [];

var pol = function () {
    function pol(w, h) {
        _classCallCheck(this, pol);

        this.name = w;
        this.name2 = h;
    }

    _createClass(pol, [{
        key: "sayname",
        value: function sayname() {
            document.getElementById("demo").innerHTML = this.name;
        }
    }]);

    return pol;
}();

function myFunction() {
    var p = new pol(10, 20);
    p.sayname();

    var name = document.getElementById("name").value;
    var rollno = document.getElementById("rollno").value;
    var passoutyear = document.getElementById("passoutyear").value;
    var stream = document.getElementById("stream").value;
    if (name == parseInt(name)) {
        alert("Wrong Value Entered");
    } else if (rollno != parseInt(rollno)) {
        alert("Wrong Value Entered");
    } else if (passoutyear != parseInt(passoutyear)) {
        alert("Wrong Value Entered");
    } else if (name == null || name == "", rollno == null || rollno == "", passoutyear == null || passoutyear == "", stream == null || stream == "") {
        alert("Please Fill All Required Field");
        return false;
    } else if (rollno.toString().length < 10 || rollno.toString().length > 10) {

        alert("length of rollno is not defined");
    } else {

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