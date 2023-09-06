function calculate(event) {
  event.preventDefault();
  let height = parseFloat(document.getElementById("height").value);
  let weight = parseFloat(document.getElementById("weight").value);
  let years = parseFloat(document.getElementById("years").value);
  let gender = document.getElementById("gender").value;

  if(gender == "Homem"){
    let total = 88.362+(13.397*weight)+(4.799*height)-(5.677*years)

    document.getElementById('tmb').innerHTML = total.toFixed(2);
    document.getElementById("total").style.display = "block";
  }

  if(gender == 'Mulher'){
    let total = (447.593 +(9.247*weight)+(3.098*height)-(4.330*years))

    document.getElementById('tmb').innerHTML = total.toFixed(2);
    document.getElementById("total").style.display = "block";
  }
}

document.getElementById("total").style.display = "none"

document.getElementById("form").addEventListener("submit", calculate);