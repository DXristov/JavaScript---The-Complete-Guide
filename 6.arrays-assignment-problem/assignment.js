const initialArray = [-2,4,6,8,10];

const filteredArray = initialArray.filter(arr => arr > 5);
console.log(filteredArray);

const mappedArray = initialArray.map(val => ({num: val}));
console.log(mappedArray);

const reducedArray = initialArray.reduce((result, value) => result * value, 1);
console.log(reducedArray);

function findMax(...numbers) {
    let max = [0];
    let min = [0];
    for(const number of numbers){
        if (number > max){
            max = number;
        }
        if(number < min){
            min = number;
        }
    }
    return [min, max];
}

const [minimum, maximum] = findMax(...initialArray);
console.log(minimum, maximum);

const noDuplicates = new Set();
noDuplicates.add(1);
noDuplicates.add(5);
noDuplicates.add(1);
noDuplicates.add(5);
noDuplicates.add(7);

console.log(noDuplicates);