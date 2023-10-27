document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 
  });

  // Dapatkan elemen-elemen input
const tipeDriverInput = document.getElementById("tipeDriver");
const tanggalInput = document.getElementById("tanggal");
const waktuInput = document.getElementById("waktu");
const penumpangInput = document.getElementById("orang");
const submitButton = document.getElementById("searchCarBtn");
const editButton = document.getElementById("editBtn");

function checkInputs() {
  const isTipeDriverSelected = tipeDriverInput.value !== "Pilih Tipe Driver";
  const isTanggalFilled = tanggalInput.value !== "";
  const isWaktuFilled = waktuInput.value !== "";
  submitButton.disabled = !(isTipeDriverSelected && isTanggalFilled && isWaktuFilled);
}
tipeDriverInput.addEventListener("change", checkInputs);
tanggalInput.addEventListener("input", checkInputs);
waktuInput.addEventListener("input", checkInputs);

checkInputs();

submitButton.addEventListener("click", () => {
  submitButton.style.display = "none";
  editButton.style.display = "block";
  tipeDriverInput.disabled = true;
  tanggalInput.disabled = true;
  waktuInput.disabled = true;
  penumpangInput.disabled = true;
});


editButton.addEventListener("click", () => {
  editButton.style.display = "none";
  submitButton.style.display = "block";
  tipeDriverInput.disabled = false;
  tanggalInput.disabled = false;
  waktuInput.disabled = false;
  penumpangInput.disabled = false;

});