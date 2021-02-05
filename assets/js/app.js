$(function() {
  
var header = $("#header"), 
    introH = $("#intro").innerHeight(),
        scrollOffset =  $(window).scrollTop();
    
   
    /* Fixed Header */
    
    checkScroll(scrollOffset);
    
    $(window).on("scroll", function() {
        
        scrollOffset = $(this).scrollTop();
        
        checkScroll(scrollOffset);
    });
       
    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) { 
        header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }
   
  
   /*считаем сколько по высоте скролят страницу, если проскролили больше, чем высота блока, тогда мы придаем шапке класс fixed */


/* Smooth scroll */

$("[data-scroll]").on("click", function(event) {
    event.preventDefault();
    
    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset= $(blockId).offset().top - 25; /* отнимаю 25 пикселей - высота меню*/
    
    
    $("#nav a").removeClass("active");
    $this.addClass("active"); 
/* ссылки на которые мы нажали принимают класс active */
  
    
    $("html, body").animate({
        scrollTop:blockOffset
    },500);  /* плавно скролим к разделам, плавность 500 милисекунд */
    $("#nav").toggleClass("active", false); /* убираю меню после нажатия ссылки */
    $("#nav-toggle").toggleClass("active", false);  /* убираю крестик, оживляю бургер-меню после нажатия ссылки*/
});

    /* Menu Nav toggle*/
    
$("#nav-toggle").on("click",function(event) {
    event.preventDefault();
    
    $(this).toggleClass("active");  /*бургер превращаем в крестик*/
    $("#nav").toggleClass("active"); /* вызываем мобильное меню*/
    
    });    
    
 /* Collapse */
    
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
    });
    
    
    /* Slider */
    
    $("[data-slider]").slick ({
        infinite: true,
        fade:false,
        slidesToShow:1,
        slidesToScroll:1
    });
    
    
    
    
    
    
    
     });