function copyText(id) {
  var copyText = document.getElementById(id.toString());
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
}
