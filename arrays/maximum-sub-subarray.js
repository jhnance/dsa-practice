function sum_windows_of_size(numbers, window_size) {
    if (window_size > numbers.length) return 0;

    let li = 0;
    let ri = window_size - 1;

    let max_sum = 0;

    for (let i = 0; i <= ri; i++) {
        max_sum += numbers[i];
    }

    li++;
    ri++;

    let window_sum = max_sum;
    while (ri <= numbers.length - 1) {
        window_sum -= numbers[li - 1];
        window_sum += numbers[ri];

        if (window_sum > max_sum) {
            max_sum = window_sum;
        }

        li++;
        ri++;
    }

    return max_sum;
}
