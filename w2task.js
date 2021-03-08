
// soal nomor 1
// Buatlah sebuah function untuk mencetak pattern berikut beserta flow chartnya:
// *
// * *
// * * *
// * * * *
// * * * * *


// function asterik(indeks){
//     let s = ''
//     for(let column = 1; column <= indeks; column++){
//         for(let stars = 1; stars <= column; stars++){
//             s += '*'
//         }
//         s += '\n'
//     } 
//     console.log(s)
// }
// asterik(5)



//soal nomor 2
// Buatlah sebuah function untuk mencetak pattern segitiga pascal berikut beserta flow chartnya:
//             1
//          1   1
//        1   2   1
//      1   3   3    1
//    1  4    6   4    1
//  1  5   10   10   5   1

//faktorial dengan for
// function factorial(n){
//     let resultFactorial = 1
//     for(let indeksFactorial = 1; indeksFactorial <= n; indeksFactorial++){
//         resultFactorial *= indeksFactorial
//     }
//     return resultFactorial
// }

// // factorial dengan rekursif
// // function factorial(n){ 
    
// //     if( n === 0) return 1;
// //     return n * factorial(n-1);
   
// // }

// let column = 5
// let result = ''

// for(let indeksColumn = 0; indeksColumn < column; indeksColumn++ ){
//     for(let indeksSpace = column; indeksSpace >= indeksColumn; indeksSpace--){
//         result += ' '
//     }
//     for(let number = 0; number <= indeksColumn; number++){
//         result += factorial(indeksColumn)/ ( factorial(number) * factorial(indeksColumn - number) ) + ' ';
//     }
//     result += '\n';
// }
// console.log(result)



// //soal nomor 3
// Buatlah sebuah function untuk menampilkan bilangan prima diantara bilang ke 1 dengan bilangan ke 2, 
// note bilangan 1 tidak boleh lebih besar dari bilangan 2 dan gambarkan flow chartnya.
// Input: Bilangan 1: 20, Bilangan 2: 50

// function number(number1,number2){
//     let result = ''
//     for(let primeNumber = number1; primeNumber <= number2; primeNumber++){
//         if(primeNumber % 2 != 0 && primeNumber % 3 != 0 && primeNumber % 5 != 0 && primeNumber % 7 != 0 && primeNumber % 11 != 0 ){
//             result += primeNumber + ' '
//         }
//     } 
// console.log('bilangan prima antara ' + number1 + ' dan ' + number2 + ' adalah ' + result )
// }
// number(20,50)



// // soal nomor 4
// Buatlah function yang menerima parameter integer untuk 
// menghasilkan table pengalian untuk angka 1 s/d 9 (max kali 10) dan gambarkan flow chartnya.
// Input: 5
// Output: 	
// 5 * 1 = 5
// 5 * 2 = 10
// 5 * 3 = 15
// 5 * 4 = 20
// 5 * 5 = 25
// 5 * 6 = 30
// 5 * 7 = 35
// 5 * 8 = 40
// 5 * 9 = 45
// 5 * 10 = 50

// function input(input1){
//     for(let number = 1; number <= 10; number++){
//         console.log(input1 +' * ' + number + ' = ' + input1*number)
//     }
// }
// input(5)




// // soal nomor 5
// Buatlah sebuah function untuk mencek apakah sebuah inputan adalah huruf vokal 
// atau bukan dan gambarkan flow chartnya (pastikan huruf besar dan kecil menghasilkan output yang sama)
// Input:a
// Output: a adalah huruf vokal
// Input:B 
// Output: B adalah bukan huruf vokal

// function vocal(vocal1){
//     let vocal2 = vocal1.toLowerCase()
//     if( vocal2 === 'a' || vocal2 === 'i' || vocal2 === 'u' || vocal2 === 'e' || vocal2 === 'o' ){
//         console.log(vocal2 + ' adalah huruf vokal')
//     }else{
//         console.log(vocal2 + ' adalah bukan huruf vokal')
//     }
// }
// vocal((prompt('masukan huruf')))




// soal nomor 6
// Buatlah deret fibonacci number sesuai dengan parameter yang diinputkan dan gambarkan flow chartnya.
// Input: 10 
// Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

// let a = 0
// let b = 1
// let result = b
// for(let i = 1; i < 10; i++){
//     document.write(result+' ') //1,1,3
//     result = a + b //1,2,3
//     a = b //1,1,2
//     b = result//1,2,3
    
// }



// soal nomor 7
// Buatlah sebuah function untuk menghilangkan sebuah array sesuai dengan inputan kedua dan gambarkan flow chartnya. 
// (Gunakan perulangan jangan pakai splice)
// Input-1 : [“a”,“b”,“c”,“d”,“e”]
// Input-2 : c
// Output: [“a”,“b”,“d”,“e”]

// function input1(input){
//     const array = ['a','b','c','d','e']
//     for(let element = 0; element < array.length; element++) {
//         if(array[element] != input )
//             document.write(array[element])
//         }
// }
// input1('c')

//soal nomor 8
// Buatlah sebuah function untuk menggabungkan 2 array berisikan integer dan3 jika nilainya 
// sama hapus salah satu kemudian sort dari kiri kanan (kecil ke besar) dan gambarkan flow chartnya.
// Input-1: [1,3,4,1,5,6]
// Input-2: [7,2,4,1,5]
// Output: [1,2,3,4,5,6,7]

// let a = [1,3,4,1,5,6]
// let b = [7,2,4,1,5]
// let newarray = ''
// for(let i = 0; i < a.length; i++){
//     if(a[i] != b[b.length])
// }

// function array1([1,3,4,1,5,6]){
    
// }



//COBACOBA
// var m, n
// for(m=1; m<= 5; m++){
//     for(n=m; n<=5 && n != 4; n++){
//         document.write(n);
//     }
//     document.write('<br>')
// }
