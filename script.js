

const form = document.getElementById('myForm');
form.addEventListener("submit", ((event)=> {
  event.preventDefault();
  const fName = form.elements['first-name'].value;

  
  const lName = form.elements['last-name'].value;
  const addr = form.elements['address'].value;
  const pincode =form.elements['pincode'].value;
 

  const state = form.elements['state'].value;
  const country = form.elements['country'].value;

  document.getElementById("inputfname").innerHTML = fName;
  document.getElementById("inputlname").innerHTML = lName;
  document.getElementById("inputaddress").innerHTML = addr;
  document.getElementById("inputpincode").innerHTML = pincode;
  
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


 
}));


