
function countDown(a) {
  console.log(a);
  let res=a-1
  if(res>0){countDown(res)}
}
countDown(5)
