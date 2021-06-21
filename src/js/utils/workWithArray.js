const arrMove = (step, arr) => {
  const movedArr = [];
  if (step < 0) {
    step = -step % arr.length;
    for (let i = step; i < arr.length; i++) 
      movedArr.push(arr[i]); 
    for (let i = 0; i < step; i++)
      movedArr.push(arr[i]);
  } else {
    step = step % arr.length;
    for (let i = arr.length - 1; i > arr.length - 1 - step; i--) 
      movedArr.push(arr[i]); 
    for (let i = 0; i <= arr.length - 1 - step; i++)
      movedArr.push(arr[i]);
  }
  return movedArr;
} 

export { arrMove }