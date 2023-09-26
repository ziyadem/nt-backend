
const str = prompt("text");

let str1 ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dignissimos repudiandae laudantium assumenda ratione veritatis mollitia ipsam aperiam. Harum, assumenda.";

const findIndex = (arg, value) => {
  const arr = arg.split(" ");
  let sum = " ";
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    index +=arr[i].length +1
    if (arr[i] == value) {
      sum = arr[i];
      index -=arr[i].length;
      return console.log(index);    
    }
  }
  console.log(sum.length);
  console.log(index);
};

findIndex(str1, str);