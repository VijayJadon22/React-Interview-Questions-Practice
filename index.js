// console.log('5' + 3); //53
// const a = '5' + 3;
// console.log(a + typeof (a));
// console.log('5' - 3); //2

// console.log(5 == '5'); // so basically first double equal to operator checks only for valye so true
// console.log(5 === '5'); // so basically triple equal to operator checks value as well as data type so false


// console.log(typeof (NaN));
// console.log(NaN === NaN);


// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);

const arr = ["Aman", "Raghav", "Arun", "Shivam"];
const heading = document.getElementById("greeting");
// let index = 0;
heading.addEventListener("click", () => {
    // const random = Math.floor(Math.random() * 4);
    // console.log(random);
    // heading.innerText = `Hello ${arr[random]}`;

    if (index == 4) { index = 0; }
    console.log(index);
    heading.innerText = `Hello ${arr[index]}`;
    index++;
})

const random = Math.ceil(Math.random() * 4);
console.log(random);
