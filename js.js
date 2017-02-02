$(document).ready(function () {
    get();
});

function get() {
    $.ajax({
        url: "http://api.fixer.io/latest?base=USD"
        , type: 'GET'
        , success: function (result) {
            for (var item in result.rates) {
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