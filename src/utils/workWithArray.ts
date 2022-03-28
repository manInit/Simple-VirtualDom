const arrMove = (step: number, arr: Array<any>): Array<any> => {
  let movedArr: Array<any>

  step = step % arr.length

  if (step < 0) {
    const firstPart = arr.slice(- arr.length - step)
    const secondPart = arr.slice(0, - arr.length - step)
    movedArr = firstPart.concat(secondPart)
  } else {
    const firstPart = arr.slice(0, arr.length - step)
    const secondPart = arr.slice(arr.length - step)
    movedArr = secondPart.concat(firstPart)
  }

  return movedArr
}

export { arrMove }