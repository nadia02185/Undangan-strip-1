document.getElementById("rsvpForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("thanksMessage").style.display = "block";
});

document.getElementById("whatsappBtn").addEventListener("click", function() {
  const name = document.getElementById("name").value;
  const status = document.getElementById("status").value;
  const jumlah = document.getElementById("jumlah").value;
  const message = `Halo! Saya ${name} akan ${status} dengan jumlah tamu: ${jumlah}`;
  this.href = "https://wa.me/?text=" + encodeURIComponent(message);
});
