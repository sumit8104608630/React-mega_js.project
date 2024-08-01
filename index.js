// let study Binary Search
//  first array should be sorted
// it is divide and conquer technique
// lef most index  &  right most index
// mid value = left +right / 2
// check for left == right 
// whenever you want to use any Math method use Math.method name
let arr=[15,20,34,46,52,69]
function BinarySearch(arr,Search){
    let left=0;
    let right=arr.length-1;
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        console.log("mid"+mid)

        if(arr[mid]==Search){

            return mid;
        }
        else{
            if(arr[mid]<Search){

                left=mid+1
            }
            else{

                right=mid-1
            }
        }
    }
}
//console.log(BinarySearch(arr,46))



let str="sharmaa"
function count_of_letter(str){
    let obj={}
    for(let i=0;i<str.length;i++){
        console.log(0)
 obj[str[i]]=(obj[str[i]]||0)+1

    }
    console.log(obj)
}
count_of_letter(str)




function spiralOrder(array){


   
let left=0;
let right=array.length-1;
let top=0;
let bottom=array.length-1;
let row=[];
while(left<=right&&top<=bottom){
for(let i=left;i<=right;i++){
    row.push(array[top][i]);
}
top++
for(let i=top;i<=bottom;i++){
    row.push(array[i][right]);
}
right--;
if(top<=bottom){
for(let i=right;i>=left;i--){
    row.push(array[bottom][i]);
}
bottom--
}
if(left<=right){
for(let i=bottom;i>=top;i--){
    row.push(array[i][left]);
}
left++
    }
    let matrix = [];
    let rows = 3;
let columns = 3;
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < columns; j++) {
            row.push(array[i * columns + j]);
        }
        matrix.push(row);
    }
    console.log(matrix);
}
return row



}
let array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(spiralOrder(array))

// let see array 
let ars=[8,9,6,2,2]
ars.shift()
ars.unshift(6)
let a=ars.reduce((prev,current)=>{
    return prev+current
})
let b=ars.find((item)=>item==4)
 ars=ars.filter((item)=>item!=9)
//console.log(c)
//ars.splice(0,2)
console.log(ars)
let new_ars=ars.with(1,10)
console.log(new_ars)

let str1="sum";
let str2="sumsum";
let x=str1.length
let y=str2.length
// !x?y:x
//console.log(!x?y:x)

var kidsWithCandies = function(candies, extraCandies) {
    let maxNo=Math.max(...candies)
    let bolls=candies.map(item=>item+extraCandies>=maxNo?true:false)
    return bolls
};

console.log(kidsWithCandies([2,3,5,1,3],3))
let as=[2,3,5,1,3]
console.log(Math.max(...as))