const getmonth = (callback) => {
    setTimeout(()=>{
        let error = false;
        let month = ['January', 'February', 'March', 'April', 'May', 'Juni', 'July', 'August',
        'September', 'October', 'November', 'Desember'];
        if(!error){
            callback(null, month)
        }else {
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 4000)
}

const getData = (err, data) => {
    try {
        data.map((item) => {
            return console.log(item);
        })
    } catch (error) {
        console.log(err.message);
    }
}

getmonth(getData)