function loadRelease(repo, shortname) {
  let container = document.getElementById("data-" + shortname);
  $.ajax({
    url: "https://api.github.com/repos/bme-notes/" + repo + "/releases/latest",
    dataType: "json",
    success: function(data) {
      let assets = data.assets;
      let url = assets[0].browser_download_url;
      let date = new Date(data.published_at);
      if (url != null) {
        container.innerHTML = "<a href='" + url + "' class='pure-button pure-button-primary'>PDF (" + date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ")</a>";
      } else {
        container.innerHTML = "<a class='pure-button pure-button-disabled' href='#'>hiba történt</a>";
      }
    },
    error: function() {
      container.innerHTML = "<a class='pure-button pure-button-disabled' href='#'>nincs PDF</a>";
    }
  });
}
