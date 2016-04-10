var rendered = false;
var app = {
    // Application Constructor
    startApp: function() {
        var netStat = utils.ckeckNetworkStatus();
        if(netStat.type !== "none"){
            $('.header_main_page ons-icon').attr("icon","fa-check");
            $('.status_net_text').text("Conectado");
            $('.status_net_text').removeClass("no_net");
            $('#net_icon').css("color","rgb(51, 204, 51)")
        }else{
            $('.header_main_page ons-icon').attr("icon","ion-close");
            $('.status_net_text').text("Sin conexión");
            $('.status_net_text').addClass("no_net");
            $('#net_icon').css("color","rgb(230, 0, 0)")
        }
        if(!rendered){
            ons.bootstrap();    
        }
        rendered = true;
        $('#main-page').show();
        $('#options-template').show();
        app.setAppEvents();
    },
    setAppEvents: function() {
    //NET EVENTS    
        document.addEventListener("online", function(){
            $('.header_main_page ons-icon').attr("icon","fa-check");
            ons.compile($('.header_main_page ons-icon')[0])
            $('.status_net_text').text("Conectado");
            $('.status_net_text').removeClass("no_net");
            $('#net_icon').css("color","rgb(51, 204, 51)")
        }, false);

        document.addEventListener("offline", function() {
            $('.header_main_page ons-icon').attr("icon","ion-close");
            ons.compile($('.header_main_page ons-icon')[0])
            $('.status_net_text').text("Sin conexión");
            $('.status_net_text').addClass("no_net");
            $('#net_icon').css("color","rgb(230, 0, 0)")
        }, false);
    //PAGE INIT EVENTS
        $(document).on('pageinit', '#options-template', function() {
            optionsController.loadOptionScreen();
        });
        $(document).on('pageinit','#main-page',function(){
            app.startApp();
        });
    //DOM EVENTS    
        $('ons-carousel-item').off();
        $('ons-carousel-item').on('click',function(){
            console.log($(this));
            var id = $(this).data().id;
            console.log(id);
            //$('#'+id+' #windowUp').css()

                $('#'+id+' #status').addClass('rotating');
            setTimeout(function(){ 
                $('#'+id+' #status').removeClass('rotating'); console.log("done"); 
            }, 2000);
            
        });
    }
   
};
