
const myform = document.getElementById("form");
myform.addEventListener("submit", (e) => {
  e.preventDefault();

  const fname = document.getElementById("first-name").value;
  const pincode = document.getElementById("pincode").value;
  const lname = document.getElementById("last-name").value;
  const address = document.getElementById("address").value;

  const state = document.getElementById("state").value;
  const country = document.getElementById("country").value;

  const parentdiv = document.getElementById("tableview");
  const title = document.createElement("h2");
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const trow1 = document.createElement("tr");
  const thead1 = document.createElement("th");
  const thead2 = document.createElement("th");
  const thead3 = document.createElement("th");
  const thead4 = document.createElement("th");
  const thead5 = document.createElement("th");
  const thead6 = document.createElement("th");
  const thead7 = document.createElement("th");
  const thead8 = document.createElement("th");
  const trow2 = document.createElement("tr");
  const tdata1 = document.createElement("td");
  const tdata2 = document.createElement("td");
  const tdata3 = document.createElement("td");
  const tdata4 = document.createElement("td");
  const tdata5 = document.createElement("td");
  const tdata6 = document.createElement("td");
  const tdata7 = document.createElement("td");
  const tdata8 = document.createElement("td");

  table.id = "mytable";
  table.classList.add("table", "table-sm","border","border-2","border-dark");

  title.innerText = "Table-View";
  thead1.innerText = "Firstname";
  thead2.innerText = "Lastname";
  thead3.innerText = "Address";
  thead4.innerText = "Pincode";
  thead5.innerText = "Gender";
  thead6.innerText = "Favourite Food";
  thead7.innerText = "State";
  thead8.innerText = "Country";

  tdata1.innerText = fname;
  tdata2.innerText = lname;
  tdata3.innerText = address;
  tdata4.innerText = pincode;

  if (document.getElementById("male").checked === true) {
    tdata5.innerText = "Male";
  } else {
    tdata5.innerText = "Female";
  }

  let checkboxes = document.getElementsByName("food");
  let result = "";
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      result += checkboxes[i].value + " ";
    }
  }
  let r1 = result.split(" ");
  if (r1.length < 3) {
    alert("Kinldy choose atleast two favourite items");
    table.setAttribute("style", "display:none");
    title.setAttribute("style", "display:none");
  } else tdata6.innerText = result;

  tdata7.innerText = state;
  tdata8.innerText = country;

  trow1.append(
    thead1,
    thead2,
    thead3,
    thead4,
    thead5,
    thead6,
    thead7,
    thead8
  );
  thead.append(trow1);
  trow2.append(
    tdata1,
    tdata2,
    tdata3,
    tdata4,
    tdata5,
    tdata6,
    tdata7,
    tdata8
  );
  tbody.append(trow2);
  table.append(thead, tbody);
  parentdiv.append(title, table);

  myform.reset();
});