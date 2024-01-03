// Given an integer array nums, return true if any value appears
// at least twice in the array, and return false if every element
// is distinct.
//
// Example 1:
//
// Input: nums = [1,2,3,1]
// Output: true
// Example 2:
//
// Input: nums = [1,2,3,4]
// Output: false
// Example 3:
//
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
//
// Constraints:
// 1 <= values.length <= 10^5
// -10^9 <= values[i] <= 10^9
//
// Because of the second constraint, you can't use values at that specific value index
// to track a count of encountering that value. For example, if you run into the value
// 10^9, you cannot tally it at the 10^9th index because the maximum index is 10^5.
// If this constraint didn't exist, and if you wanted to do all your work in place, then
// this would be a viable approach. You just immediately return true when you encounter
// a tracked value of 2.
function containsDuplicate(values: number[]) {
  if (values.length === 0 || values.length === 1) return false;

  const encounteredValues = {};

  for (let i = 0; i < values.length; i++) {
    let value = values[i];
    if (typeof encounteredValues[value] === 'undefined') {
      encounteredValues[value] = 1;
    } else {
      return true;
    }
  }

  return false;
}

const tests: Array<
  () => { source: string; expected: boolean; actual: boolean }
> = [
  function hasOnlyDuplicates() {
    return {
      source: 'Has only duplicates',
      actual: containsDuplicate([0, 0]),
      expected: true,
    };
  },
  function hasDuplicatesAtEnd() {
    return {
      source: 'Has duplicates at the end of the input array',
      actual: containsDuplicate([0, 1, 1]),
      expected: true,
    };
  },
  function hasNoDuplicates() {
    return {
      source: 'Has no duplicates',
      actual: containsDuplicate([0, 1]),
      expected: false,
    };
  },
  function emptyInput() {
    return {
      source: 'Empty input array',
      actual: containsDuplicate([]),
      expected: false,
    };
  },
  function singleValueInput() {
    return {
      source: 'Single value input array',
      actual: containsDuplicate([0]),
      expected: false,
    };
  },
];

function runTests() {
  let results: Array<ReturnType<(typeof tests)[number]>> = [];
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
