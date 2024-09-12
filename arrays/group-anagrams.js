function is_anagram(a, b) {
    if (a.length !== b.length) return false;

    let letter_counts_a = {};
    let letter_counts_b = {};

    for (let i = 0; i < a.length; i++) {
        let letter_a = a[i];
        let letter_b = b[i];

        letter_counts_a[letter_a] = letter_counts_a.hasOwnProperty(letter_a)
            ? letter_counts_a[letter_a] + 1
            : 1;

        letter_counts_b[letter_b] = letter_counts_b.hasOwnProperty(letter_b)
            ? letter_counts_b[letter_b] + 1
            : 1;
    }

    for (let i = 0; i < a.length; i++) {
        const letter = a[i];

        let count_in_a = letter_counts_a[letter];
        let count_in_b = letter_counts_b[letter];

        if (count_in_a !== count_in_b) return false;
    }

    return true;
}

function group_anagrams(strings) {
    const groupings = new Map();

    for (let word of strings) {
        let sorted = word.split('').sort().join('');

        if (groupings.has(sorted)) {
            groupings.get(sorted).push(word);
        } else {
            groupings.set(sorted, [word]);
        }
    }

    return [...groupings.values()].map((anagrams) => {
        return anagrams;
    });
}

console.log(group_anagrams(['', '']));
console.log(group_anagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
