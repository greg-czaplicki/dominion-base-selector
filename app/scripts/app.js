const tenNums = () => {
  const arr = [];
  while (arr.length < 10) {
    const randomnumber = Math.ceil(Math.random() * 26);
    if (arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
  }
  return arr;
};

document.querySelector('#randomize').addEventListener('click', () => {
  const numbers = tenNums();
  for (let i = 0; i < 10; i++) {
    document.getElementById(`card__${i}`).src = `./images/${numbers[i]}.jpg`;
  }
});
