function addZero(i) {
	if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function Mandar() {
	var mensaje = $("#message").val();
	$(".chat-mensajes").append("<div class='mensajes-derecha2'>" + mensaje + "</div>");
	var d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    $(".mensajes-derecha2").append("<span class='tt'>" + h + ":" + m + "</span>");

}