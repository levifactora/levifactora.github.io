// Two small jobs, nothing else:
// 1. A demo video appears by itself once its file exists in the videos folder.
// 2. A yellow "draft" bar counts the placeholders left on the page, and vanishes at zero.

function updateDraftBanner() {
  var count = document.querySelectorAll(".todo").length;
  var banner = document.querySelector(".draft-banner");
  if (count === 0) {
    if (banner) banner.remove();
    return;
  }
  if (!banner) {
    banner = document.createElement("div");
    banner.className = "draft-banner";
    document.body.prepend(banner);
  }
  banner.textContent =
    "Draft: " + count + " highlighted item" + (count === 1 ? "" : "s") + " still to fill in on this page";
}

document.querySelectorAll(".demo-frame video").forEach(function (video) {
  function showVideo() {
    video.hidden = false;
    var empty = video.parentElement.querySelector(".demo-empty");
    if (empty) empty.remove();
    updateDraftBanner();
  }
  if (video.readyState >= 1) showVideo();
  else video.addEventListener("loadedmetadata", showVideo, { once: true });
});

updateDraftBanner();
