let name = document.getElementById("name");
let lname = document.getElementById("lname");
let btn = document.getElementById("sabt");
let answer = document.getElementById("answer");
let height = Number(document.getElementById("height"));
let weight = Number(document.getElementById("weight"));
let img = document.getElementById("imge");
btn.addEventListener("click", function () {
  let heightt = Number(document.getElementById("height").value);
  let weightt = Number(document.getElementById("weight").value);
  let namee = document.getElementById("name").value;
  let lnamee = document.getElementById("lname").value;
  let result = weightt / (heightt * heightt);

  if (result < 18.5) {
    answer.innerHTML = `<h2>Dear ${namee} ${lnamee}, your weight is in the <span>underweight</span> category </h2> <br><h3>
    and your BMI is <span> ${result.toFixed(2)}</span></h3>`;
    answer.style.display = "block";
    img.classList.add("animate__fadeInRight");
    answer.classList.add("animate__fadeInLeft");
    answer.style.backgroundColor = "lightskyblue";
    img.style.display = "block";
  } else if (result > 18.5 && result < 24.9) {
    answer.innerHTML = `<h2>Dear ${namee} ${lnamee} , your weight is in the <span>healthy weight</span> category </h2> <br><h3>
    and your BMI is <span> ${result.toFixed(2)}</span></h3>`;
    answer.style.backgroundColor = "mediumaquamarine";
    answer.style.display = "block";
    img.style.display = "block";
    img.classList.add("animate__fadeInRight");
    answer.classList.add("animate__fadeInLeft");
  } else if (result > 25 && result < 29.9) {
    answer.innerHTML = `<h2>Dear ${namee} ${lnamee},your weight is in the <span>overweight</span> category </h2>
    <br><h3>
    and your BMI is <span> ${result.toFixed(2)}</span></h3>`;
    answer.style.backgroundColor = "khaki";
    answer.style.display = "block";
    img.style.display = "block";
    img.classList.add("animate__fadeInRight");
    answer.classList.add("animate__fadeInLeft");
  } else if (result > 30 && result < 34.9) {
    answer.innerHTML = `<h2>Dear ${namee} ${lnamee},your weight is in the <span>obesity</span> category 
    </h2><br><h3>
    and your BMI is <span> ${result.toFixed(2)}</span></h3>`;
    answer.style.backgroundColor = "orange";
    answer.style.display = "block";
    img.style.display = "block";
    img.classList.add("animate__fadeInRight");
    answer.classList.add("animate__fadeInLeft");
  } else if (result > 34.9) {
    answer.innerHTML = `<h2>Dear ${namee} ${lnamee}, your weight is in the <span>extremely overweight</span> category 
    </h2><br><h3>
    and your BMI is <span> ${result.toFixed(2)}</span></h3>`;
    answer.style.backgroundColor = "crimson";
    answer.style.display = "block";
    img.style.display = "block";
    img.classList.add("animate__fadeInRight");
    answer.classList.add("animate__fadeInLeft");
  } else {
    answer.innerHTML = `<h3>Please enter your height and weight</h3>`;
    answer.style.backgroundColor = "whitesmoke";
    answer.style.display = "block";
    answer.classList.add("animate__bounceIn");
  }
});
