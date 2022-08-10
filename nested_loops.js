
for (var year = 2023 ; year < 2025 ; year++) {
    console.log(year) ;
    console.log("------------")
    for (var month = 1 ; month <= 12 ; month++ ) {
        for (var week = 1 ; week < 5 ; week++){
            for (var day = 1 ; day <= 7 ; day++){
                console.log('Month : ', month, ' Week : ', week, ' Day :', day) ;
            }
        }
    }
    
    console.log('Happy New Year !');
}


for (var i = 0 ; i < 6 ; i++) {
    for (var y = 0 ; y < 10 ; y++){
        console.log(i,'x', y, '=', i * y) ;
    }
}