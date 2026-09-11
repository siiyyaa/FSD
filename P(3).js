let ar=[1,2,3,4,5,6,7,8,9,10];
console.log(ar);
console.log(ar[0]);
let obj1={
    name:"abc",
    city:"pune",
    cgpa:9.7,
}
let obj2={
    name:"xyz",
    city:"mumbai",
    cgpa:9.5,
}
let obj3={
    name:"pqr",
    city:"mumbai",
    cgpa:6.8,   
}
let obj4={
    name:"lmn",     
    city:"banglore",
    cgpa:9.6,
}
let obj5={
    name:"rst",
    city:"chennai",
    cgpa:8.9,
}
let obj6={
    name:"uvw",
    city:"mumbai",
    cgpa:9.2,
}
let obj7={
    name:"xyz",
    city:"delhi",
    cgpa:7.8,
}


let ar1=[obj1,obj2,obj3,obj4,obj5,obj6,obj7];
console.log(ar1);
console.table(ar1); //table format of array of objects

// filtering 
// let arr2=ar1.filter((obj)=>{
//     return obj.cgpa>9 && obj.city=="mumbai";
// });
// console.log(arr2);

let arr2 = [];
let j=0;
for(let i=0;i<ar1.length;i++){
    if(ar1[i].cgpa>9 && ar1[i].city=="mumbai"){
        arr2[j]=ar1[i];
        j++;
    }
    
}

console.table(arr2);