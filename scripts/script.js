function HidePhoto(){
    var x = document.getElementById("imagen");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

function copyToClipboard(){
    navigator.clipboard.writeText("benjamingilardoni040302@gmail.com");
    alert("Copied to clipboard: benjamingilardoni040302@gmail.com");
    e.preventDefault();
};
