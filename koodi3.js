//aloitetaan .readylla 
$(document).ready(function(){
    $('#button1').click(function(){
        $('#container1').fadeOut();
    });
});
$('#button1').dblclick(function(){
    $('#container1').fadeIn();
});
$('#button2').click(function(){
    $('#container1').slideUp();
});
$('#button2').dblclick(function(){
    $('#container1').slideDown();
});


//otsikon piilottaminen klikkaamalla
$("h1").
click(function(){
  $(this).hide();
});

//haetaan tieto jqueryn avulla
$(document).ready(function() {
    $("#button3").click(function(event){
       $('#lihis').load('https://baconipsum.com/api/?type=meat-and-filler');
    });
 });


button4.addEventListener('click', getcat)
function getcat() {
   // haetaan kissakuva fetchillä
    fetch('https://aws.random.cat/meow')
    .then(response => response.json())
    .then(data => {
        //haetaan tiedosto
        kissa.innerHTML = `<img src="${data.file}">`
    })
}




