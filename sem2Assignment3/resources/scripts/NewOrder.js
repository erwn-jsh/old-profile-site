function getInputs(){
    SushA = document.getElementById("SushA");
    SushB = document.getElementById("SushB");
    SushC = document.getElementById("SushC");

    BeefDon = document.getElementById("BeefDon");
    KatsuDon = document.getElementById("KatsuDon");
    OyakoDon = document.getElementById("OyakoDon");

    SashA = document.getElementById("SashA");
    SashB = document.getElementById("SashB");
    Bento = document.getElementById("Bento");
}

function Compute(){
    var Total = 0;
    var Tax = 0;
    var TotTax = 0;

    getInputs();
    
    SushA.checked ? Total += 10 : Total -= 0;
    SushB.checked ? Total += 10 : Total -= 0;
    SushC.checked ? Total += 10 : Total -= 0;
    BeefDon.checked ? Total += 8 : Total -= 0;
    KatsuDon.checked ? Total += 8 : Total -= 0;
    OyakoDon.checked ? Total += 8 : Total -= 0;
    SashA.checked ? Total += 10 : Total -= 0;
    SashB.checked ? Total += 10 : Total -= 0;
    Bento.checked ? Total += 15 : Total -= 0;
    
    if (Total < 1) {
        document.getElementById("itemTot").innerHTML = "&nbsp;&nbsp;$0.00";
        document.getElementById("Tax").innerHTML = "&nbsp;&nbsp;$0.00";
        document.getElementById("totTax").innerHTML = "&nbsp;&nbsp;$0.00";
    } else {
        Tax = Total * 0.05;
        TotTax = Total + Tax;
        document.getElementById("itemTot").innerHTML = "&nbsp;&nbsp;$" + formatMoney(Total);
        document.getElementById("Tax").innerHTML = "&nbsp;&nbsp;$" + formatMoney(Tax);
        document.getElementById("totTax").innerHTML = "&nbsp;&nbsp;$" + formatMoney(TotTax);
    }
}

function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
  
      const negativeSign = amount < 0 ? "-" : "";
  
      let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
      let j = (i.length > 3) ? i.length % 3 : 0;
  
      return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
      console.log(e)
    }
  };