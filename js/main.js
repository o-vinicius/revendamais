(function($) {
    
    let images = document.querySelectorAll("img");
    lazyload(images);
            
    $(window).on('beforeunload', function(){
        $(window).scrollTop(0);
    });
    
    // tapume com load
    $(window).load(function() {
        $("#loader").addClass("carregado");
    });
    
    
    // Fixar Subheader ao scrollar a página
    window.onscroll = function() {
        subheaderFixed()
    };

    var header = document.getElementById("sub-header");
    var sticky = header.offsetTop;

    function subheaderFixed() {
      if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
    
    
    // Botão para abrir o menu mobile
    $('.menu-mobile').click(function(){
        $('.nav-menu-mobile').toggleClass('active');
    });
    $('.nav-menu-mobile a').click(function(){
        $('.nav-menu-mobile').toggleClass('active');
    });
    
    
    // Animação das âncoras do menu
    $('.nav-menu a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length && $(window).width() >= 992) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 82
                }, 900, "swing");
                return false;
            } if (target.length && $(window).width() < 992){
                $('html, body').animate({
                    scrollTop: target.offset().top - 68
                }, 900, "swing");
                return false;
            }
        }
    });
    
    // Animação dos elementos
    window.sr = ScrollReveal();
    sr.reveal('.animate');

    // Parallax dos backgrounds
    $(window).enllax();
    
    // Accordion
    $('.accordion').find('h3').click(function(){
        //Expand or collapse this panel
        $(this).next().slideToggle('slow');
        
        
        $(this).toggleClass('active');
        $('.accordion').find('h3').not($(this)).removeClass('active');

        //Hide the other panels
        $(".accordion div").not($(this).next()).slideUp('slow');

    });
    
    // Slider
    $('.owl-carousel').owlCarousel({
        startPosition:1,
        nav:false,
        mouseDrag:false,
        responsive:{
            0:{
                items:1,
                margin:10
            },
            600:{
                items:2,
                margin:10
            },
            1000:{
                margin:0,
                items:3
            }
        }
    });
    

    // Tabs Funcionalidades
    $('.container-fluid.func-item').fadeOut()
    $('#emissao-nota-fiscal-eletronica').fadeIn().addClass('active');

    $('.func-item ul li a.active').click(function(){
        return false;
    });
    $('.func-item ul li a:not(.active)').click(function(){
        var idselecao = $(this).attr('href')
        $('.container-fluid.func-item').hide();
        $(idselecao).fadeIn(600);
        
        $('html, body').animate({
            scrollTop: $('#funcionalidades').offset().top - 52 + $('#funcionalidades .title').outerHeight()
        }, 300, "swing");
        
        return false;
    });
    
    $('select').change(function() {
        var idselecao = $(this).val();
        $('.container-fluid.func-item').hide();
        $('#' + idselecao).fadeIn(600)
    });
    
    
    // BOTÕES CTA
    $('.demo').click(function(){
        // Variável indicando o local do botão pegando o valor do atributo [data-loca]
        var localbtn = $(this).attr('data-local');
        // Título do modal
        $('#form h2').text('Receba nossa demonstração.');
        // Texto do botão do modal
        $('#form .btn').text('Receber demonstração gratuita');
        // Texto descritivo do botão do modal
        $('#form .btn-cta small').text('Um representante irá te ligar, em até 20 minutos - absolutamente sem compromisso - para te falar mais sobre o Revenda Mais.');
        // Valores para os campos invisíveis Assunto e Local
        $('[name=assunto]').val('Demostração');
        $('[name=local]').val(localbtn);
    });
    
    $('.liga').click(function(){
        // Variável indicando o local do botão pegando o valor do atributo [data-loca]
        var localbtn = $(this).attr('data-local');
        // Título do modal
        $('#form h2').text('Receba nossa ligação.');
        // Texto do botão do modal
        $('#form .btn').text('Receber uma ligação agora');
        // Texto descritivo do botão do modal
        $('#form .btn-cta small').text('Um representante irá te ligar, em até 20 minutos - absolutamente sem compromisso - para te falar mais sobre o Revenda Mais.');
        // Valores para os campos invisíveis Assunto e Local
        $('[name=assunto]').val('Ligação');
        $('[name=local]').val(localbtn);
    });
    
    $(document).on("scroll", onScroll);
    
    function onScroll(event){
        var scrollPos = $(document).scrollTop() + $("#sub-header").outerHeight() + 1;
        $('#sub-header a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#sub-header a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }

}(jQuery));