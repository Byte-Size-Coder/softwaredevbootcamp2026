// 99 Bottles of Beer song
for (let bottles = 10; bottles > 0; bottles--) {
  let bottleText = "bottles";

  if (bottles === 1) {
    bottleText = "bottle";
  }

  console.log(
    `${bottles} ${bottleText} of beer on the wall, ${bottles} ${bottleText} of beer.`,
  );

  if (bottles >= 2) {
    console.log(
      `Take one down and pass it around, ${bottles - 1} ${bottleText} of beer on the wall.`,
    );
  } else {
    console.log(
      `Take one down and pass it around, Now there are no more bottles of beer on the wall.`,
    );
  }
}
