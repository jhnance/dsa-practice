// Given an array nums containing n distinct numbers in the range [0, n],
// return the only number in the range that is missing from the array.
//
// Example 1:
//
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3].
// 2 is the missing number in the range since it does not appear in nums.
//
// Example 2:
//
// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2].
// 2 is the missing number in the range since it does not appear in nums.
// Example 3:
//
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9].
// 8 is the missing number in the range since it does not appear in nums.

function missing_number(nums) {
    const max_value = nums.length;
    const expected_sum = (max_value * (max_value + 1)) / 2;
    const actual_sum = nums.reduce((running_sum, current_value) => {
        return running_sum + current_value;
    }, 0);
    return expected_sum - actual_sum;
}

const tests = [
    function missing_one() {
        return {
            source: 'Missing 1',
            actual: missing_number([0, 2]),
            expected: 1,
        };
    },

    function missing_two() {
        return {
            source: 'Missing 2',
            actual: missing_number([0, 1, 3]),
            expected: 2,
        };
    },

    function missing_three() {
        return {
            source: 'Missing 3',
            actual: missing_number([0, 1, 2, 4]),
            expected: 3,
        };
    },

    function order_doesnt_matter() {
        return {
            source: "Order doesn't matter",
            actual: missing_number([4, 1, 2, 0]),
            expected: 3,
        };
    },
];

function runTests() {
    let results = [];
    for (const test of tests) {
        results.push(test());
    }

    let anyTestsFailed = false;

    for (const result of results) {
        if (result.actual !== result.expected) {
            anyTestsFailed = true;
            console.log(`Test '${result.source}' failed`);
        }
    }

    if (anyTestsFailed) return;

    console.log('All tests passed.');
}

runTests();
