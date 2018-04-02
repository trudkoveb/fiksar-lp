// Class 'active' for nav links
$('nav li').click(function() {
    $('nav li').removeClass('active');
    $(this).addClass('active');
});

// toggle icon's color inside input
$('input[type="text"]').focus(function(){
    $('form .icon').addClass('active');
})
$('input[type="text"]').blur(function(){
    $('form .icon').removeClass('active');
})

// show another tags
$(".tags a:gt(0)").hide();
$('.more-tags').click(function(){
    $(".tags a:gt(0)").show();
});

//
$('.mobile-menu').click(function() {
  $('.header-wrapper nav').toggle("slow");
});
