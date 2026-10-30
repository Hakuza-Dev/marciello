function fn_ValForm() {
    var sNama = document.getElementById("nama").value;
    var sEmail = document.getElementById("email").value;
    var sUmur = document.getElementById("umur").value;
    var sKategori = document.getElementById("kategori").value;
    var sMsg = "";
    var sInfo = "";
    var sPilihan = "";
    var iUmur;
    var oRegex = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

    if (sNama == "") {
        sMsg += "\n* Anda belum mengisikan nama";
    }
    
    if (sEmail == "") {
        sMsg += "\n* Anda belum mengisikan email";
    } else if (!oRegex.test(sEmail)) {
        sMsg += "\n* Format email tidak valid (hanya huruf kecil)";
    }

    if (sUmur == "") {
        sMsg += "\n* Anda belum mengisikan umur";
    } else if (isNaN(sUmur)) {
        sMsg += "\n* Umur harus berupa angka";
    } else {
        iUmur = Number(sUmur);
        if (iUmur < 17 || iUmur > 65) {
            sMsg += "\n* Umur harus antara 17 sampai 65 tahun";
        } else if (iUmur <= 25) {
            sInfo = "Paket Pelajar";
        } else {
            sInfo = "Paket Umum";
        }
    }

    if (sKategori == "") {
        sMsg += "\n* Anda belum memilih paket member";
    }

    if (sMsg != "") {
        alert("Peringatan:\n" + sMsg);
        return false;
    }

    switch (sKategori) {
        case "S":
            sPilihan = "Silver";
            break;
        case "G":
            sPilihan = "Gold";
            break;
        case "P":
            sPilihan = "Platinum";
            break;
    }

    alert("Terima kasih " + sNama + " ! Anda terdaftar di paket " + sPilihan + " (" + sInfo + ").");
    return true;
}
