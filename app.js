//Bài 1: Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.
// for(i =1 ; i<100 ;i++){
//     console.log(i);
//     if(i===99){
//         console.log('đã kết thúc');
//     }
// }

//bài 2 Hiển thị ra 20 số trong dãy fibonacci đầu tiên.
// let a = 0 ;
// let b= 1;
// let c ;
// for(let i=0 ;i<20 ;i++){
//     console.log(a); 
//     c =a +b ;
//     a =b ;
//     b=c;
// }



// bài 3 Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.
// let a = 0 ;
// let b= 1;
// let c ;
// for(let i=1 ;i<=5 ;i++){
//     if(i%5===0){
//     console.log(i); 
//     c =a +b ;
//     a =b ;
//     b=c;}
// }

//bài 4 Tính tổng của 20 số đầu tiên trong dãy fibonacci.
// let a = 0 ;
// let b= 1;
// let c ;
// let e = 0;
// for(let i=0 ;i<20 ;i++){
//     e= e + a ; // e là tổng của dãy 20 số // e = 0+0
//     c =a +b ;                             // c = 0+1
//     a =b ;                                // a = 1
//     b=c;                                  // b=1
// }console.log(e);


// bài 5 Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.
// let i=1;
// let dem=0;
// let tong=0;
// while(dem<=29){
//     if(i%7==0){
//         dem+=1;
//         tong+=i;
//     }
// i+=1;
// }
// console.log(tong)



// Bài 6: Hãy viết một chương trình in ra các số từ 1 đến 100. 
// Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó.
//  Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ "FizzBuzz".
// for(let i=1 ;i<=100;i=i+1){
//     if(i%3===0&& i%5===0){
//         console.log(`${i} FIZZBUZZ`)}
//     else if(i%3===0){
//         console.log(`${i}fizz`);
//     } else if (i%5===0){
//         console.log(`${i}buzz`);
//     }
// }



// // bài 7 Tính giai thừa của một số nguyên dương
// let giaithua = Number(prompt(' nhập vào số n'));
// let b =1;
// for(let i=1 ; i <=giaithua ;i++){
//     b= b*i
// }console.log(`giai thừa là ${b}`);


