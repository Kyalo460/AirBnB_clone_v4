console.log("Hello there");
$(document).ready(function () {
    let id_arr = [];
    let name_arr = [];

    // Adds a string of amenities to HTML
    function update (choices) {
        $.each(name_arr, function(index, value) {
            if (index > 0) { choices += ', ' }
            choices += value;
        });   
        $('div.amenities .trial').text(choices);
    }

    $('input[type="checkbox"]').change(function () {
        let amenity_id = $(this).data('id');
        let amenity_name = $(this).data('name');
        let choices = '';

        is_present = jQuery.inArray(amenity_id, id_arr);
        if (is_present == -1) {
            id_arr.push(amenity_id);
            name_arr.push(amenity_name);
            update(choices);
        }
        else {
            id_arr.splice(is_present, 1);
            name_arr.splice(is_present, 1);
            update(choices);
        }
    });
});

// Function to check the status of the API
async function checkApiStatus() {
    try {
      // Make the HTTP request to the API
      const response = await fetch('http://0.0.0.0:5001/api/v1/status/');
  
      // Check if the response is OK (status code 200)
      if (response.ok) {
        // Parse the JSON response
        const data = await response.json();
				let element = document.querySelector("div#api_status");
  
        // Check if the status in the response is "OK"
        // Adds a class to an element if "OK"
        if (data.status === "OK") {
          element.classList.add("available");
        } else {
          element.classList.remove("available");
        }
      } else {
        console.log("Failed to fetch API. Status code:", response.status);
      }
    } catch (error) {
      console.error("Error fetching the API:", error);
    }
}
  checkApiStatus();
  