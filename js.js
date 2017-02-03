$(document).ready(function () {
    get();
});
var c = "USD";

function gC() {
   c = $( "#from option:selected" ).text();
    get();


}

function get() {
    alert(c);
    $.ajax({
        url: "http://api.fixer.io/latest?base=" + c,
        type: 'GET',
        success: function (result) {
            for (var item in result.rates) {
                 $('#from').append('<option value =' + result.rates[item] + '>' + item + '</option>');
                $('#to').append('<option value =' + result.rates[item] + '>' + item + '</option>');
               
            }
        }
    });
}

function exchange() {
    var input = parseFloat($('#in').val());
    var ex = parseFloat($('#to').val());
    $('#res').val((input * ex));
}