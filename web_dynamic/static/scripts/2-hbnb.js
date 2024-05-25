console.log("Hello there");
$(document).ready(function () {
    let id_arr = [];
    let name_arr = [];

    function update (choices) {
        $.each(name_arr, function(index, value) {
            if (index > 0) { choices += ', ' }
            console.log(choices);
            choices += value;
        });   
        $('div.amenities .trial').text(choices);
    }

    $('input[type="checkbox"]').change(function () {
        let amenity_id = $(this).data('id');
        let amenity_name = $(this).data('name');
        // const amenity = {
        //     name: amenity_name,
        //     id: amenity_id,
        // }
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
        /*console.log(id_arr);*/
        /*console.log(name_arr);*/
    });
});