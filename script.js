function compute()
{
//Variable creation		
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
//math for formula   
    var interest = principal * years * rate / 100;
    var endYear = new Date().getFullYear() + parseInt(years);
//Alert!!! number less than 1 and focus
    if(principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
//Answer displayed on page
    document.getElementById("result").innerHTML = `If you deposit <mark>${principal}</mark>,<br>at an interest rate of 
    <mark>${rate}</mark>.<br>You will receive an amount of <mark>${interest.toFixed(2)}</mark>,<br>in the year <mark>${endYear}</mark><br>`;
}
//slider display
function rangeReader()
{
    var sliderValue = document.getElementById("rate").value;
    document.getElementById("sliderValue").innerText = `${sliderValue}%`;
}
        
