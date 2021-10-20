function calculate() {
    var selectCategory = document.getElementById("category");
    var selectCategoryValue = selectCategory.options[selectCategory.selectedIndex].value === "" ? 0 : parseInt(selectCategory.options[selectCategory.selectedIndex].value);
    var qty = parseInt(document.getElementById("qty").value);
    var total = 0;
    var price = 200;
    if (qty >= 1 && selectCategoryValue > 0) {
        switch (selectCategoryValue) {
            case 1:
                total = qty * price * 0.2;
                break;
            case 2:
                total = qty * price * 0.5;
                break;
            case 3:
                total = qty * price * 0.85;
                break;
        }
        document.getElementById("total").innerHTML = "Total a pagar: $" + total;
    }
}

function resetForm() {
    document.getElementById("form-tickets").reset();
    document.getElementById("total").innerHTML = "Total a pagar: $";
}

$(document).ready(function () {
    $("#button-confirm").click(function () {

        //Fetch form to apply custom Bootstrap validation
        var form = $('#form-tickets')

        //   alert(form.prop('id')) //test to ensure calling form correctly

        if (form[0].checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()

        } else {           
            var button = document.getElementById('button-confirm');
            // button.prop("disabled", true);
            button.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Cargando datos...`;
            event.preventDefault();
            event.stopPropagation();
            setTimeout(function () {
                document.getElementById('form-tickets').submit();
            }, 3000);

        }
        form.addClass('was-validated');
    });
});
