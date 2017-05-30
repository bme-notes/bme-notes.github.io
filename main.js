let releaseData = [];
let loadSuccess = false;
let apiAddress = "http://localhost:5000";

function loadReleaseData() {
  let notice = document.getElementById("rate-notice");

  $.ajax({
    url: apiAddress + "/update-times/",
    dataType: "json",
    success: function(data) {
      releaseData = data;
      releaseData.forEach(function (obj) {
        let name = obj['name'];
        let url = obj['url'];
        let date = obj['updated'];
        let container = document.getElementById("data-" + name);
        if (container != null) {
          container.innerHTML = "<a href='" + url + "' class='pure-button pure-button-primary'>PDF (" + date + " UTC)</a>";
        }
      });
    },
    error: function() {
      notice.innerHTML = "Hiba történt az adatok lekérése közben, az oldal esetleg hibásan működhet, kérlek látogass el a repositorykhoz a legújabb PDF-ekért.";
    }
  });
}
