

var optionsController = {

	loadOptionScreen: function(){
		$('#options-screen-content').load('assets/templates/template_options.html',function(){
			utils.renderTemplate($('#options-screen-template'),$('#options-screen-content'));
			optionsController.eventSeter();
		});
	},
	eventSeter: function(){

		$('.checkbox').off();
		$('.checkbox').on('click',function(event){
			var id = $(this).data().id;
			console.log(id);
			if($('[data-id='+id+'] input').is(':checked')){
				$('#'+id+'.text-input').attr("disabled",false);
			}else{
				$('#'+id+'.text-input').attr("disabled",true);
			}
			event.stopPropagation();
		});
	},
	saveOptions: function()	{
		
	}

}

