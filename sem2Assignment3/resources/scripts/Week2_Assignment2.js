var rows = null;
var cols = null;
var tableArea = null;
var exampleTable = null;

$("#btnSubmit").submit(function(e) {
    e.preventDefault();
});

function GenTable(){
    getInputs();
    //$("#tableArea").replaceWith('');
    // $("ExampleTable").hidden = true;
    DrawTable();
} 

function getInputs(){
    rows = $("#txtRows").val();
    cols = $("#txtCols").val();

    // console.log(rows);
    // console.log(cols);

    tableArea = $("#ResultTable");
    //exampleTable = $("#ExampleTable");

    
}

function DrawTable(){

    //exampleTable.innerHTML = '';
    ResultTable.innerHTML = '';

    for (let i = 1; i <= rows; i++) {
        tableArea.append("<tr>")
        for (let j = 1; j <= cols; j++) {
            tableArea.append("<td>" + i + "," + j + "</td>");
        }
        tableArea.append("</tr>")
    }
    

    //tableArea.html("<h1>You gened a table</h1>");

    // document.write("<table class=" + "table is-hoverable" +">")

    // for (let i = 1; i <= rows; i++) {
    //     document.write("<tr>")
    //     for (let j = 1; j <= cols; j++) {
    //         document.write("<td>")
    //             document.write(i + "," + j);
    //         document.write("</td>")
    //     }
    //     document.write("</tr>")
    // }
    // document.write("</table>");

}