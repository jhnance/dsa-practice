/**
 * Return the indices of two distinct elements within the input that sum to the target.
 *
 * Constraints:
 *   - Exactly one solution (only two possible indices)
 *     - We can assume, then, that the input is not empty and has at least two elements in it
 *   - Cannot re-use elements
 *     - Can re-use duplicate values at different indices, e.g., if your input is [3, 3] and target is 6
 *       then your output should be [0, 1], but it cannot be [0, 0] or [1, 1]
 *   - Target can be positive, negative, or even 0
 *     - -10^9 <= target <= 10^9
 */

// numbers = [-12, 0, 14]
// target = -12

// -12: 0
// 0: 1

// number we visit might be the target value; if so the remainder is 0 and we must encounter a 0

// numbers = [-12, -1, 14]
// target = -13

// -12: 0
// -1: 1

// Math.abs(target) = 13
// Math.abs(value) = 12
// 13 - 12 = 1
// remainder = 1
// Math.abs(-1) = 1
// 1 = 1, we found our remainder

// so treat all values with Math.abs?

// [3, 3], 6
// undefined
function two_sum(numbers, target) {
    debugger;
    const encountered = {};

    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];

        // we haven't encountered this number yet
        if (!encountered.hasOwnProperty(number)) {
            // mark it as encountered and record the index we encountered it at
            encountered[number] = i;
        }

        let remainder = target - number;
        // have we encountered the remainder already at a different index?
        let previously_encountered = encountered.hasOwnProperty(remainder);
        if (previously_encountered && encountered[remainder] !== i) {
            // if we have, even if the values are the same the indexes are different, and we can safely return
            // handles the [X, X] case as well as the [X, Y] case
            return [encountered[remainder], i];
        }
    }
}

console.log(`returned: ${two_sum([3, 3], 6)}`);
