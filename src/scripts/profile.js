function updateProfile() {
    const input = document.getElementById("profileInput");
    const profileImg = document.getElementById("profileImg");

    const file = input.files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
        profileImg.src = reader.result;
    } 

    if (file) {
        reader.readAsDataURL(file);
    }
}
