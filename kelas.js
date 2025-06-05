    const search = document.getElementById('search').value;
    const alert = document.getElementById("alert");
    const focus = document.getElementById('backgroundGelap');
    const tombolbuka = document.getElementById("buka");
    const tomboltutup = document.getElementById('tutup');

    tombolbuka.addEventListener("click", function(){
        alert.classList.add("active")
        focus.style.display = "block"
    })
        tomboltutup.addEventListener("click", function(){
        alert.classList.remove("active")
        focus.style.display = "none"
    })

    const filter = document.getElementById("filter");
    const tombol = document.getElementById("buttomFilter")
    tombol.addEventListener('click', function(){
        filter.style.display = "block"
    })



    const kelasData = [
    {
        namaKelas: 1,
        tugas: "Tugas Proyek UI/UX",
        deskripsi: "50 Mahasiswa sudah mengumpulkan tugas"
    },
    {
        namaKelas: 2,
        tugas: "Tugas RPL",
        deskripsi: "20 Mahasiswa sudah mengumpulkan tugas"
    },
    {
        namaKelas: 3,
        tugas: "Pertemuan Tearkhir",
        deskripsi: "6 Kelompok sudah presentassi"
    }];

    console.log(kelasData);

    const alertList = document.getElementById('alertList');
    kelasData.forEach((kelas, index)=>{
        const div = document.createElement("div");
        div.innerHTML = `
        <span>
            <h4 style="font-size: 16px;">${kelas.tugas}</h4>
            <p style="font-size: 8px;">${kelas.deskripsi}</p>
        </span>
        <span style="text-align: end;">
            <i class="fa-solid fa-xmark" onClick="hapus(${index})"></i> 
            <p style="font-size: 8px;">30Detik yang lalu</p>
        </span>
        `;
        alertList.appendChild(div);
    })

    function hapus(index){
        kelasData.splice(index, 1)
        renderUlang();
    }
    function renderUlang(){
        const alertList = document.getElementById('alertList');
        alertList.innerHTML = "";
        kelasData.forEach((kelas, index)=>{
            const div = document.createElement("div");
            div.innerHTML = `
            <span>
                <h4 style="font-size: 16px;">${kelas.tugas}</h4>
                <p style="font-size: 8px;">${kelas.deskripsi}</p>
            </span>
            <span style="text-align: end;">
                <i class="fa-solid fa-xmark" onClick="hapus(${index})"></i> 
                <p style="font-size: 8px;">30Detik yang lalu</p>
            </span>
            `;
            alertList.appendChild(div);
        })
    }