// 99 Bottles of Beer song
for (let bottles = 99; bottles > 0; bottles--) {
  console.log(
    `${bottles} bottles of beer on the wall, ${bottles} bottles of beer.`,
  );
  console.log(
    `Take one down and pass it around, ${bottles - 1} bottles of beer on the wall.`,
  );
}
