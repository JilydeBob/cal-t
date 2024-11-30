let autoincrenment = 1;

function saveFrom() {
    document.getElementById('kodeProduk').value = "MD-0" + autoincrenment;
    console.log("MD-0" + autoincrenment++);

}

document.getElementById('kodeProduk').value = "MD-0" + autoincrenment;