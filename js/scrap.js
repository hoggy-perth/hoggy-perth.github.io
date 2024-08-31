
let d = new Date();
newHtmlText = "<h2>Today's date is " + d + "</h2>"

document.body.insertAdjacentHTML('beforeend',newHtmlText);

<script>
    window.addEventListener("load", function() {
        readCSVFile();
    });
</script>    
    