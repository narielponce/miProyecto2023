  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // When the user submits the form
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the form from submitting
    
    // Get the form data
    var formData = new FormData(event.target);
    var name = formData.get('ingUsuario');
    //var email = formData.get('email');
    //var message = formData.get('message');
    
    // Populate the modal window with the form data
    document.getElementById("modalUser").innerHTML = name;
    //document.getElementById("modalEmail").innerHTML = email;
    //document.getElementById("modalMessage").innerHTML = message;
    
    // Display the modal window
    modal.style.display = "block";
  });
