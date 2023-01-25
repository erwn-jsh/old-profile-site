
var column = null;
var table = document.createElement("Table");
var row = table.insertRow();

function Click(){ 
    //table1();
    genTable();
}

function table1()
{
    table = document.createElement("table")
    row = document.getElementById("row").value;
    column = document.getElementById("column").value;

    // for (let i = 0; i < row; i++) {
    //     row = table.insertRow();
    //     for (let j = 0; j < column; j++) {
    //         column = row.insertCell();
    //     }
    // }

    var i = 1;
    var j = 1;
    if (i <= row) 
    {
        row = table.insertRow();
        row.innerHTML = i;
        i++;
        if (j <= column)
        {
            
            column = row.insertCell();
            column.innerHTML = j;
            j++;
        }
    }
document.getElementById("resultTable").appendChild(table); 

};

function genTable(){
    table = document.getElementById("resultTable");
    row = document.getElementById("row").value;
    column = document.getElementById("column").value;

    table.innerHTML = '';

    for (let i = 1; i <= row; i++) {
        let tr = document.createElement("tr")
        for (let j = 1; j <= column; j++) {
            let td = document.createElement("td")
            td.innerHTML = i + "," + j;
            tr.append(td)
            table.append(tr);
        }
    }
}
