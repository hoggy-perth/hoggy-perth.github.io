function Upload() {
        var fileUpload = document.getElementById("fileUpload");
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
        if (regex.test(fileUpload.value.toLowerCase())) {
            if (typeof (FileReader) != "undefined") {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var table = document.createElement("table");
                    var rows = e.target.result.split("\n");
                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");
                        if (cells.length > 1) {
                            var row = table.insertRow(-1);
                            for (var j = 0; j < cells.length; j++) {
                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[j];
                            }
                        }
                    }
                    var dvCSV = document.getElementById("dvCSV");
                    dvCSV.innerHTML = "";
                    dvCSV.appendChild(table);
                }
                reader.readAsText(fileUpload.files[0]);
            } else {
                alert("This browser does not support HTML5.");
            }
        } else {
            alert("Please upload a valid CSV file.");
        }
   }

function readCSVFile(){
    fetch('http://localhost/datas.csv')
    .then(response => response.text())
    .then(csvText => {
      // Split the CSV data into rows
      const rowData = csvText.split('\n');
      
      // <table > <tbody>
      var tbodyEl = document.getElementById('tblcsvdata').getElementsByTagName('tbody')[0];
      tbodyEl.innerHTML = "";
      
      // Loop on the row Array (change row=0 if you also want to read 1st row)
      for (var row = 1; row < rowData.length; row++) {
        // Insert a row at the end of table
        var newRow = tbodyEl.insertRow();
        // Split by comma (;) to get column Array
        rowColData = rowData[row].split(';');
        // Loop on the row column Array
        for (var col = 0; col < rowColData.length; col++) {
          // Insert a cell at the end of the row
          var newCell = newRow.insertCell();
          newCell.innerHTML = rowColData[col];
        }
      }
    });
}