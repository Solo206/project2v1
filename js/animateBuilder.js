/* function that animates based on percentage value in bio.skills.value data of bio json object*/

$(document).ready(function(){

    /* target each skillbar associated with json skill type and animate value amount */
    
    $('.skillbar').each(function(){
    
        $(this).animate({
    
            width:$(this).attr('data-percent')
        
        /*animate for 3 sec */
        }, 3000);
    
    });

});