/*

lebustore 559 Lebustore Shop

https://lebustore.com/tm-559-Lebustore-shop

*/

'use strict';
$(document).ready(function() {

    // Accordion
    // var all_panels = $('.lebustore-accordion > li > ul').hide();

    // $('.lebustore-accordion > li > a').click(function() {
    //     var target =  $(this).next();
    //     if(!target.hasClass('active')){
    //         all_panels.removeClass('active').slideUp();
    //         target.addClass('active').slideDown();
    //     }
    //     else{
    //       target.removeClass('active').slideUp()
    //     }
    //   return false;
    // });
    // End accordion

   

    // Product detail
    $('.product-links-wap a').click(function(){
      var this_src = $(this).children('img').attr('src');
      $('#product-detail').attr('src',this_src);
      return false;
    });
    $('#btn-minus').click(function(){
      var val = $("#var-value").html();
      val = (val=='1')?val:val-1;
      $("#var-value").html(val);
      $("#product-quanity").val(val);
      return false;
    });
    $('#btn-plus').click(function(){
      var val = $("#var-value").html();
      val++;
      $("#var-value").html(val);
      $("#product-quanity").val(val);
      return false;
    });
    $('.btn-size').click(function(){
      var this_val = $(this).html();
      $("#product-size").val(this_val);
      $(".btn-size").removeClass('btn-secondary');
      $(".btn-size").addClass('btn-success');
      $(this).removeClass('btn-success');
      $(this).addClass('btn-secondary');
      return false;
    });
    // End roduct detail

});

// -----------------for-Shopping-cart-------------
$(document).ready(function(){
  update_amounts();
  $('.qty, .price').on('keyup keypress blur change', function(e) {
    update_amounts();
  });
});
function update_amounts(){
var sum = 0.0;
    $('#myTable > tbody  > tr').each(function() {
    var qty = $(this).find('.qty').val();
      var price = $(this).find('.price').val();
      var amount = (qty*price)
      sum+=amount;
      $(this).find('.amount').text(''+amount);
    });
$('.total').text(sum);
}



//----------------for quantity-increment-or-decrement-------
var incrementQty;
var decrementQty;
var plusBtn  = $(".cart-qty-plus");
var minusBtn = $(".cart-qty-minus");
var incrementQty = plusBtn.click(function() {
var $n = $(this)
  .parent(".button-container")
  .find(".qty");
$n.val(Number($n.val())+1 );
update_amounts();
});

var decrementQty = minusBtn.click(function() {
  var $n = $(this)
  .parent(".button-container")
  .find(".qty");
var QtyVal = Number($n.val());
if (QtyVal > 0) {
  $n.val(QtyVal-1);
}
update_amounts();
});
















