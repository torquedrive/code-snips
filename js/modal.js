  // Get the modal element
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.querySelector(".open-modal-btn");

  // Get the element that closes the modal
  var closeBtn = document.getElementById("closeBtn");

  // When the user clicks the button, open the modal
  btn.onclick = function() {
      modal.style.display = "flex"; // Display the modal
  }

  // When the user clicks on the close button (x), close the modal
  closeBtn.onclick = function() {
      modal.style.display = "none"; // Hide the modal
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  }