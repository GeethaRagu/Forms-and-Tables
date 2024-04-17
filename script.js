
    const form = document.getElementById('myForm');

    // Add an event listener to the form's submit event
    form.addEventListener('submit', function(e) {
      // Prevent the form from submitting
      e.preventDefault();

      // Get the values from the form
      const fname = form.elements['first-name'].value;
      const lname = form.elements['last-name'].value;

      /* Create a new table row
      const row = document.createElement('tr');

      // Create a new table cell for the name
      const nameCell = document.createElement('td');
      nameCell.textContent = name;

      // Create a new table cell for the age
      const ageCell = document.createElement('td');
      ageCell.textContent = age;

      // Append the table cells to the table row
      row.appendChild(nameCell);
      row.appendChild(ageCell);

      // Append the table row to the table body
      document.getElementById('myTable').tBodies[0].appendChild(row);*/
      document.getElementById("inputfname").textContent = fname;
    });
