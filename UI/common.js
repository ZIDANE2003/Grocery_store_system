// Define your api here
var productListApiUrl = 'http://127.0.0.1:5000/getProducts';
var uomListApiUrl = 'http://127.0.0.1:5000/getUOM';
var productSaveApiUrl = 'http://127.0.0.1:5000/insertProduct';
var productDeleteApiUrl = 'http://127.0.0.1:5000/deleteProduct';
var orderListApiUrl = 'http://127.0.0.1:5000/getAllOrders';
var orderSaveApiUrl = 'http://127.0.0.1:5000/insertOrder';

// For product drop in order
var productsApiUrl = 'https://fakestoreapi.com/products';

function callApi(method, url, data) {
    $.ajax({
        method: method,
        url: url,
        data: data
    }).done(function( msg ) {
        window.location.reload();
    });
}

function calculateValue() {
    var total = 0;
    $(".product-item").each(function( index ) {
        var qty = parseFloat($(this).find('.product-qty').val());
        var price = parseFloat($(this).find('#product_price').val());
        price = price*qty;
        $(this).find('#item_total').val(price.toFixed(2));
        total += price;
    });
    $("#product_grand_total").val(total.toFixed(2));
}

function orderParser(orders) {
    return {
        id : orders.Order_id,
        date : orders.date,
        orderNo : orders.customer_name,
        customerName : orders.customer_name,
        cost : parseInt(orders.total)
    }
}

function productParser(products) {
    return {
        id : products.product_id,
        name : products.product_name,
        unit : products.UOM_ID,
        price : products.price_per_unit
    }
}

function productDropParser(products) {
    return {
        id : products.product_id,
        name : products.product_name
    }
}

//To enable bootstrap tooltip globally
// $(function () {
//     $('[data-toggle="tooltip"]').tooltip()
// });