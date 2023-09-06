var section1 = $('#slide-section1');

section1.waypoint(function(){

    $('#slide-section1 h3').addClass('animate__animated animate__bounceInRight');
    $('#slide-section1 h1').addClass('animate__animated animate__bounceInRight').css({'animation-delay':'0.2s'});
    $('#slide-section1 p').addClass('animate__animated animate__bounceInRight').css({'animation-delay':'0.4s'});
    $('#slide-section1 button').addClass('animate__animated animate__bounceInRight').css({'animation-delay':'0.6s'});

},
{
    offset: '200px'
})

var section2 = $('.section-about');

section2.waypoint(function(){
    
    $('.section-about .img-box1').addClass('animate__animated animate__backInRight');
    $('.section-about .img-box2').addClass('animate__animated animate__backInRight').css({'animation-delay':'0.2s'});

},
{
    offset: '30%'
})

var section3 = $('.video-content');

section3.waypoint(function(){

    $('.video-content').addClass('animate__animated animate__bounceIn');

},
{
    offset: '30%'
})

var section4 = $('.section-choose');

section4.waypoint(function(){

    $('.section-choose .choice1').addClass('animate__animated animate__fadeInUp');
    $('.section-choose .choice2').addClass('animate__animated animate__fadeInUp').css({'animation-delay':'0.2s'});
    $('.section-choose .choice3').addClass('animate__animated animate__fadeInUp').css({'animation-delay':'0.4s'});
    $('.section-choose .choice4').addClass('animate__animated animate__fadeInUp').css({'animation-delay':'0.6s'});

},
{
    offset: '30%'
})