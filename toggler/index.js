function toggler(...value) {
  let index = 0;
  return () => {
    console.log(value[index]);
    index = (index + 1) % value.length;
  };
}

const toggle = toggler(1, 2, 3);
toggle();
toggle();
toggle();
toggle();
toggle();
