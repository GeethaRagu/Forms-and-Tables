const submit = document.getElementById("submit");
const reset = document.getElementById("reset");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const fName = document.getElementById("first-name").value;
  const lName = document.getElementById("last-name").value;
  const addr = document.getElementById("address").value;
  const pincode = document.getElementById("pincode").value;
 

  const state = document.getElementById("state").value;
  const country = document.getElementById("country").value;

  document.getElementById("inputfname").innerText = fName;
  document.getElementById("inputlname").innerText = lName;
  document.getElementById("inputaddress").innerText = addr;
  document.getElementById("inputpincode").innerText = pincode;
  
  document.getElementById("inputstate").innerText = state;
  document.getElementById("inputcountry").innerText = country;

  if(document.getElementById("male").checked===true){
    document.getElementById("inputgender").innerText = "Male";
    document.getElementById("male").checked = 0;
  }
  else{
    document.getElementById("inputgender").innerText = "Female";
    document.getElementById("female").checked =0;
  }
  let checkboxes = document.getElementsByName("food");
  let result = "";
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      result += checkboxes[i].value + " ";
    }
  }
  let r1 = result.split(" ");
  if(r1.length<3){
    alert("Kinldy choose atleast two favourite items")
  }
  else
  document.getElementById("inputfood").innerText = result;

  /*document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("pincode").value = "";
 
  document.getElementById("state").value = "";
  document.getElementById("country").value = "";

  document.getElementById("check1").checked = 0;
  document.getElementById("check2").checked = 0;
  document.getElementById("check3").checked = 0;
  document.getElementById("check4").checked = 0;
  document.getElementById("check5").checked = 0;*/
  document.getElementById("form").reset();
});
/*
reset.addEventListener("click", function () {
  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("pincode").value = "";
  document.getElementById("state").value = "";
  document.getElementById("country").value = "";
  document.getElementById("check1").checked = 0;
  document.getElementById("check2").checked = 0;
  document.getElementById("check3").checked = 0;
  document.getElementById("check4").checked = 0;
  document.getElementById("check5").checked = 0;
  document.getElementById("male").checked = 0;
  document.getElementById("female").checked = 0;
});*/
