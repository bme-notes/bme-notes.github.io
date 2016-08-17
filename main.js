function loadRelease(repo, shortname) {
  let container = document.getElementById("data-" + shortname);
  $.ajax({
    url: "https://api.github.com/repos/bme-vik/" + repo + "/releases/latest",
    dataType: "json",
    success: function(data) {
      let assets = data.assets;
      let url = assets[0].browser_download_url;
      let date = new Date(data.published_at);
      if (url != null) {
        container.innerHTML = "<a href='" + url + "'>Download PDF (" + date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ")</a>";
      } else {
        container.innerHTML = "There was a problem with the release";
      }
    },
    error: function() {
      container.innerHTML = "No release exists yet";
    }
  });
}
