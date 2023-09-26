//1
// function rev(a) {
//     let txt=String(Math.abs(a))
//     let res=''
//     for (let i = txt.length-1; i >=0 ; i--) {
//         res+=txt[i]
//     }
//     console.log(res);
// }
// rev(123)
// rev(-4287)

//2
// function uniqeSort(arr) {
//     let arr2=new Set(arr)
//     let res=[]
//     arr2.forEach(e=>{
//         res.push(e)
//     })
//     console.log(res);
// }
// uniqeSort([1,2,2,2,3])

//3
// function isTriblet(a,b,c) {
//     return (a**2+b**2===c**2)
// }
// console.log(isTriblet(3,4,5));

//4
// function specialReverse(txt,let) {
//     let a=txt.split(' ')
//     let obj={}
//     a.forEach(e => {
//         let k=0
//         let val=''
//         for (let i =e.length-1; i>=0; i--) {
//             if(e[i]===let){k++}
//             val+=e[i]
//         }
//         if(k!=0){
//             obj[e]=val
//         }
//     });
//     console.log(obj);
// }
// specialReverse('word search are super fun','s')

//5
// function sumThreSmallestNums(arr,a) {
//     let ar=[]
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]<=10 && arr[i]>=0){ar.push(arr[i])}
//     }
//     let one=['zero','one','two','three','four','five','six','seven','eight','nine','ten']
//     let obj={}
//     ar.forEach(e => {
//         obj[one[e]]=e
//     });
//     console.log(obj);
// }
// sumThreSmallestNums([1,2,3,100,8,-17,98],10)

//6
// function overlappingRectengles(arr1,arr2) {
//     let x1=arr1[0].x
//     let x2=arr1[1].x
//     let x3=arr2[0].x
//     let x4 = arr2[1].x;
//     let y1=arr1[0].y
//     let y2=arr1[1].y
//     let y3=arr2[0].y
//     let y4 = arr2[1].y;
//     let s = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
//     let s1 = Math.sqrt((x3 - x4) ** 2 + (y3 - y4) ** 2);
//     if(s>s1){
//         console.log(Math.ceil(s));
//     }else{
//         console.log(Math.ceil(s1));
//     }
// }
// overlappingRectengles([{x:2,y:1},{x:5,y:5}],[{x:3,y:2},{x:5,y:7}])
