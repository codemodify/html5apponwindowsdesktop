function AddInteraction(index, from, text) {
        $("#output").append("<div id='tw_" + index + "' class='aTweet'>" +
			                    "<span class='from'>" + from + "</span>:" +
			                    "<div id='tw_t_" + index + "'>" + text + "</div>" +						
		                    "</div>");
}