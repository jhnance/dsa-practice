// function sum_windows_of_size(numbers, window_size) {
//     if (window_size > numbers.length) return 0;

//     let li = 0;
//     let ri = window_size - 1;

//     let max_sum = 0;

//     for (let i = 0; i <= ri; i++) {
//         max_sum += numbers[i];
//     }

//     console.log(`${numbers.slice(li, ri + 1)} => ${max_sum}`);

//     li++;
//     ri++;

//     let window_sum = max_sum;
//     while (ri <= numbers.length - 1) {
//         window_sum -= numbers[li - 1];
//         window_sum += numbers[ri];

//         if (window_sum > max_sum) {
//             max_sum = window_sum;
//         }

//         li++;
//         ri++;
//     }

//     return max_sum;
// }

// function max_sequence(numbers) {
//     if (numbers.length === 0) return 0;

//     let maximum_sum = 0;
//     for (let i = 1; i <= numbers.length; i++) {
//         maximum_sum = Math.max(maximum_sum, sum_windows_of_size(numbers, i));
//     }

//     return maximum_sum;
// }

function max_sequence(numbers) {
    let max = 0;
    let current = 0;

    for (let num of numbers) {
        if (current < 0) current = 0;
        current += num;
        max = Math.max(max, current);
    }

    return max;
}

console.log(max_sequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(max_sequence([-2, -1, -3, -4, -1, -2, -1, -5, -4]));
