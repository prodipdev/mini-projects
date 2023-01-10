var dialog = document.getElementById("confirmDialog");
var img = document.getElementById("imgBox");

function confirmDelete() {
    if (typeof dialog.showModal === "function") {
        dialog.showModal();
    } else {
        alert("Your browser does not support dialog element!");
    }
}

function deleteImage() {
    img.parentNode.removeChild(img);
    dialog.close();
    document.write("Image has been deleted!");
}
function hideDialog() {
    dialog.close();
}