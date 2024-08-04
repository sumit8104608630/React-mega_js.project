
function work(name, age){
    this.age = age
    this.name = name
}

let one = new work('Ayush', 94)
work.prototype.play = function(){
    return this.name
}
work.prototype.setName = function(some){
    this.name = some
}
console.log(one.play())
one.setName('Kammerr')
console.log(one)

let info=new work("rsjiv",20);
info.play =function(){
    return ({name:this.name ,age:this.age})
}

console.log(info.play())



var reverseVowels = function(ss) {
    const arr = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let i=0;
 let s=ss.split("")
 let len=s.length;
 let j=len-1;


    while(i<j){
        if(arr.has(s[i])&&arr.has(s[j])){
            let temp=s[i];
            s[i]=s[j]
            s[j]=temp;
            i++;
            j--;
        }
        else {
            if(!arr.has(s[i])) i++;
            if(!arr.has(s[j])) j--;
        }
    }
    return s.join("")

};
console.log(reverseVowels("hello"))



// let aa=arr.find((item)=>item=="h")
// console.log(aa)


// var reverseWords = function(s) {
//     let arr=s.split(" ");
//     let new_arr=arr.reverse()
//     let filter_arr=new_arr.filter((item)=>item!="")
//     return filter_arr.join(" ").trim()
// };
// console.log(reverseWords("a good   example"));

var productExceptSelf = function(nums) {
   let prefix=new Array(nums.length).fill(1)
   prefix[0]=nums[0]
   let suffix=new Array(nums.length).fill(1)
   for (let i=1;i<nums.length;i++){
    prefix[i]=prefix[i-1]*nums[i];
   }
   suffix[nums.length-1]=nums[nums.length-1]
   for (let i=nums.length-2;i>=0;i--){
    suffix[i]=suffix[i+1]*nums[i];
   }
   let result=[];
   for (let i=0;i<nums.length;i++){
   result.push(suffix[i+1]*prefix[i-1])
}
result[nums.length-1]=prefix[nums.length-2]
result[0]=suffix[1]
return result
}
 console.log(productExceptSelf([1,2,3,4]))


 var increasingTriplet = function(nums) {
    let n1=Math.max(...nums)
    let n2=Math.max(...nums)
    let n3=Math.max(...nums)
for (let i=0;i<nums.length;i++){
    if(n1>=nums[i]){
        n1=nums[i]
    }
    else if(n2>=nums[i]){
        n2=nums[i]
    }
    else{
        return true
    }
}
console.log(n1,n2,n3)
//  if(n1<0)n1=-1*n1;
//  if(n2<0)n2=-1*n2;
//  if(n3<0)n3=-1*n3;


console.log(n1,n2,n3)

    // if(n1<n2&&n2<n3){
    //     console.log("sim")
    //     return true;
    // }
    // else {
    //     return false
    // }
return false

 };
 console.log(increasingTriplet([6,7,1,2]
 ))