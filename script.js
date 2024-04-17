const myform = document.getElementById("form");
myform.addEventListener("submit", (e) => {
  e.preventDefault();

  const fname = document.getElementById("first-name").value;
  const pincode = document.getElementById("pincode").value;
  const lname = document.getElementById("last-name").value;
  const address = document.getElementById("address").value;

  const state = document.getElementById("state").value;
  const country = document.getElementById("country").value;

  const table = document.getElementById("mytable");
  const title = document.getElementById("tabletitle");

  let checkboxes = document.getElementsByName("food");
  let result = "";
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      result += checkboxes[i].value + " ";
    }
  }
  let r1 = result.split(" ");
  if (r1.length < 3) {
    document.getElementById("error").innerText = "Select atleast two favourite food";
  } else {
    document.getElementById("error").setAttribute("style","display:none")
  
    const tbody = document.createElement("tbody");
    const trow1 = document.createElement("tr");
    const trow2 = document.createElement("tr");
    const trow3 = document.createElement("tr");
    const trow4 = document.createElement("tr");
    const trow5 = document.createElement("tr");
    const trow6 = document.createElement("tr");
    const trow7 = document.createElement("tr");
    const trow8 = document.createElement("tr");
    const thead1 = document.createElement("td");
    const thead2 = document.createElement("td");
    const thead3 = document.createElement("td");
    const thead4 = document.createElement("td");
    const thead5 = document.createElement("td");
    const thead6 = document.createElement("td");
    const thead7 = document.createElement("td");
    const thead8 = document.createElement("td");
  
    const tdata1 = document.createElement("td");
    const tdata2 = document.createElement("td");
    const tdata3 = document.createElement("td");
    const tdata4 = document.createElement("td");
    const tdata5 = document.createElement("td");
    const tdata6 = document.createElement("td");
    const tdata7 = document.createElement("td");
    const tdata8 = document.createElement("td");
    title.innerText = "Table-View";

    thead1.innerText = "Firstname";
    thead2.innerText = "Lastname";
    thead3.innerText = "Address";
    thead4.innerText = "Pincode";
    thead5.innerText = "Gender";
    thead6.innerText = "Favourite Food";
    thead7.innerText = "State";
    thead8.innerText = "Country";
    
    tbody.classList.add("border","border-2","border-dark");
    tdata1.innerText = fname;
    tdata2.innerText = lname;
    tdata3.innerText = address;
    tdata4.innerText = pincode;

    if (document.getElementById("male").checked === true) {
      tdata5.innerText = "Male";
    } else {
      tdata5.innerText = "Female";
    }
    tdata6.innerText = result;
    tdata7.innerText = state;
    tdata8.innerText = country;
    trow1.append(thead1,tdata1);
    trow2.append(thead2,tdata2);
    trow3.append(thead3,tdata3);
    trow4.append(thead4,tdata4);
    trow5.append(thead5,tdata5);
    trow6.append(thead6,tdata6);
    trow7.append(thead7,tdata7);
    trow8.append(thead8,tdata8);
    tbody.append(trow1,trow2,trow3,trow4,trow5,trow6,trow7,trow8);
    table.append(tbody);
  }

  myform.reset();
});
