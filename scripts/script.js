$("#tar-item").hide()
function openWetson() {
   $("#wetson-item").fadeIn();
   $("#tar-item").fadeOut();
   $("#tar").addClass("tab-active");
   $("#wetson").removeClass("tab-active");
}

function openTar() {
   $("#wetson-item").fadeOut();
   $("#tar-item").fadeIn();
   $("#wetson").addClass("tab-active");
   $("#tar").removeClass("tab-active");
}