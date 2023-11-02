function bucketSort(arr, bucketSize = 5) {
    if (arr.length === 0) {
        return arr;
    }

    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const range = max - min;

    const bucketCount = Math.floor(range / bucketSize) + 1;
    const buckets = new Array(bucketCount);

    for (let i = 0; i < bucketCount; i++) {
        buckets[i] = [];
    }

    for (let i = 0; i < arr.length; i++) {
        const bucketIndex = Math.floor((arr[i] - min) / bucketSize);
        buckets[bucketIndex].push(arr[i]);
    }

    const sorted = [];
    for (let i = 0; i < bucketCount; i++) {
        if (buckets[i]) {
            insertionSort(buckets[i]);
            sorted.push(...buckets[i]);
        }
    }

    return sorted;
}
