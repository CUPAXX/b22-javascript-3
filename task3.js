const program1 = (ganjilGenap) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ganjilGenap % 2 == 0) {
                resolve(`${ganjilGenap} adalah Genap`)
            } else {
                reject(`${ganjilGenap} adalah Ganjil`)
            }
        }, 2000)

    })
}

const cek = async (baru) => {
    try {
        const res = await program1(baru)
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}

cek(5)

const program2 = (nilai) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(nilai >= 70){
                resolve(`${nilai} Nilai kamu sudah bagus, tingkatkan lagi ya`)
            }else{
                reject(new Error('nilai kau terlalu jelek, tolong remedial'))
            }
        }, 3000)
    })
}



const cekNilai = async (data) => {
    try {
        const ress = await program2(data)
        console.log(ress);
    } catch (err) {
        console.log(err.message);
    }
}


cekNilai(69)
