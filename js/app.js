$(document).ready(function(){



    // Start back to top

$(".btn-backtoptops").hide();
$(window).scroll(function(){
    let getscrolltop = $(this).scrollTop();

    if(getscrolltop >= 370){
        $(".btn-backtoptops").fadeIn(1000);

    }else{
          $(".btn-backtoptops").fadeOut(1000);
    }
})
    // End back to top
    $('.navbuttons').click(function(){
        $(this).toggleClass('crossxs');
    });

    //for nav
   $(window).scroll(function(){
    let getscrolltop = $(this).scrollTop();
    console.log(getscrolltop);

    if(getscrolltop >= 200){
        $('.navbar').addClass('navmenus');
    }else{
        $('.navbar').removeClass('navmenus');
    };
   });

   //Start Property
    $('.propertylists').click(function(){
        $(this).addClass('activeitems').siblings().removeClass('activeitems');
   

    //for filter
    let getattvalue = $(this).attr('data-filter');
    console.log(getattvalue);

    if(getattvalue === "all"){
        $('.filters').show();
    }else{
        $('.filters').hide();
        $('.filters').not("." + getattvalue).hide();
        $('.filters').filter('.' + getattvalue).show();
    }
    
  

   });

     //for image overlay (or) lightbox2
     lightbox.option({
        showImageNumberLabel:false,
        positionFromTop:200
      })
 
   //End Property

   //Start Adv Section
     $(window).scroll(function(){
        let getscrollTop = $(this).scrollTop();
        // console.log(getscrollTop);

        if(getscrollTop >= 900){
            $(".advimages").addClass('fromlefts');
            $(".advtexts").addClass('fromrights');
            
        }else{
            $(".advimages").removeClass('fromlefts');
            $(".advtexts").removeClass('fromrights');
          
        }
     });

     $(".floral").click(function(){
        $('.missions').toggleClass('advbackgrounds');
        $(this).toggleClass('darkblues')
     })
   //End Adv Section

});
// Start Footer

const getyear = $("#getyear");
const getfullyear = new Date().getUTCFullYear();
getyear.text(getfullyear);


// End Footer
