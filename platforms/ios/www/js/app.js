
var utils = {

	ckeckNetworkStatus: function(){
		return navigator.connection;
	},
	renderTemplate: function(template, container, data, append) {
	    var source = template.html();
	    var handlebarsTemplate = Handlebars.compile(source);
	    if (append) {
	        container.append(handlebarsTemplate(data));
	    } else {
	        container.html(handlebarsTemplate(data));
	    }
	}
}
Handlebars.registerHelper("ifCond", function(v1, v2, options) {
    if (v1 === v2) {
        return options.fn(this);
    }
    return options.inverse(this);
});
Handlebars.registerHelper("ifNOTCond", function(v1, v2, options) {
    if (v1 !== v2) {
        return options.fn(this);
    }
    return options.inverse(this);
});