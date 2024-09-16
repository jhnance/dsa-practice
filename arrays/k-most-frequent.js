function k_most_frequent(integers, k) {
    let counts = {};

    for (let i = 0; i < integers.length; i++) {
        let integer = integers[i];
        counts[integer] = counts[integer] ? counts[integer] + 1 : 1;
    }

    counts = Object.entries(counts);

    counts.sort(([, count_a], [, count_b]) => {
        return count_b - count_a;
    });

    const most_frequent = Array(k);
    for (let i = 0; i < k; i++) {
        most_frequent[i] = counts[i][0];
    }

    return most_frequent;
}
