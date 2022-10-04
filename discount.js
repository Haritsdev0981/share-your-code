let isMember = true;

const john = isMember;
const dave = !isMember;

const johnDiscount = john ? 0.1 : 0;
const daveDiscount = dave ? 0.1 : 0;

console.log(`john got ${johnDiscount * 100}% discount`)
console.log(`dave got ${daveDiscount * 100}% discount`)