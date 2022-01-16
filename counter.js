var count = 0;
function like() {
  count = count + 1;
  document.getElementById("count").innerText = count;
}
function disLike() {
  if (count > 0) {
    count = count - 1;
  }
  document.getElementById("count").innerText = count;
}
