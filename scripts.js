//complete
async function bubbleSort() {
    let elements = document.querySelectorAll('.element');
    let len = elements.length;

    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            let current = elements[j];
            let next = elements[j + 1];

            current.style.backgroundColor = '#CAD6E3';
            next.style.backgroundColor = '#CAD6E3';

            await new Promise(resolve => setTimeout(resolve, 500));

            let currentHeight = current.style.height;
            let nextHeight = next.style.height;

            if (parseInt(currentHeight) > parseInt(nextHeight)) {
                // Swap heights
                current.style.height = nextHeight;
                next.style.height = currentHeight;

                // Change color after swapping
                current.style.backgroundColor = '#85C1E9';
                next.style.backgroundColor = '#85C1E9';
            }

            await new Promise(resolve => setTimeout(resolve, 500));

            // Reset colors
            current.style.backgroundColor = '';
            next.style.backgroundColor = '';
        }
    }
}

//complete
function mergeSort() {
    let container = document.getElementById('container');
    let elements = container.children;

    mergeSortRecursive(elements, 0, elements.length - 1);
}

//complete
// Recursive Merge Sort function
async function mergeSortRecursive(arr, left, right) {
    if (left < right) {
        const middle = Math.floor((left + right) / 2);

        // Change color before dividing
        for (let i = left; i <= right; i++) {
            arr[i].style.backgroundColor = '#CAD6E3';
        }

        await new Promise(resolve => setTimeout(resolve, 500));

        // Recursively sort the first and second halves
        await mergeSortRecursive(arr, left, middle);
        await mergeSortRecursive(arr, middle + 1, right);

        // Merge the sorted halves
        await merge(arr, left, middle, right);
    }
}

//complete
// Merge function to merge two sorted arrays
async function merge(arr, left, middle, right) {
    let leftArray = [];
    let rightArray = [];

    for (let i = left; i <= middle; i++) {
        leftArray.push(arr[i].style.height);
    }

    for (let i = middle + 1; i <= right; i++) {
        rightArray.push(arr[i].style.height);
    }

    let i = left, j = 0, k = 0;

    while (j < leftArray.length && k < rightArray.length) {
        if (parseInt(leftArray[j]) <= parseInt(rightArray[k])) {
            arr[i].style.height = leftArray[j];
            j++;
        } else {
            arr[i].style.height = rightArray[k];
            k++;
        }
        i++;

        // Change color during merging
        arr[i - 1].style.backgroundColor = '#85C1E9';
        await new Promise(resolve => setTimeout(resolve, 500));
        arr[i - 1].style.backgroundColor = '';
    }

    while (j < leftArray.length) {
        arr[i].style.height = leftArray[j];
        j++;
        i++;

        // Change color during merging
        arr[i - 1].style.backgroundColor = '#85C1E9';
        await new Promise(resolve => setTimeout(resolve, 500));
        arr[i - 1].style.backgroundColor = '';
    }

    while (k < rightArray.length) {
        arr[i].style.height = rightArray[k];
        k++;
        i++;

        // Change color during merging
        arr[i - 1].style.backgroundColor = '#85C1E9';
        await new Promise(resolve => setTimeout(resolve, 500));
        arr[i - 1].style.backgroundColor = '';
    }
}

//complete

function generateRandomArray() {
    let container = document.getElementById('container');
    container.innerHTML = '';

    for (let i = 0; i < 10; i++) {
        let height = Math.floor(Math.random() * 100) + 20;
        let element = document.createElement('div');
        element.className = 'element';
        element.style.height = height + 'px';
        container.appendChild(element);
    }
}

//complete

async function gnomeSort() {
    let elements = document.querySelectorAll('.element');
    let len = elements.length;
    let i = 0;

    while (i < len) {
        if (i === 0 || parseInt(elements[i].style.height) >= parseInt(elements[i - 1].style.height)) {
            elements[i].style.backgroundColor = '#CAD6E3';
            await new Promise(resolve => setTimeout(resolve, 500));
            elements[i].style.backgroundColor = '';
            i++;
        } else {
            // Swap heights
            let current = elements[i];
            let prev = elements[i - 1];

            current.style.backgroundColor = '#CAD6E3';
            prev.style.backgroundColor = '#CAD6E3';

            await new Promise(resolve => setTimeout(resolve, 500));

            let currentHeight = current.style.height;
            let prevHeight = prev.style.height;

            // Swap heights
            current.style.height = prevHeight;
            prev.style.height = currentHeight;

            await new Promise(resolve => setTimeout(resolve, 500));

            // Reset colors after swapping
            current.style.backgroundColor = '';
            prev.style.backgroundColor = '';

            // Move back in the array
            i--;
        }
    }
}

//complete
async function bucketSort() {
    let container = document.getElementById('container');
    let elements = container.children;

    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;

    // Find the minimum and maximum values
    for (let i = 0; i < elements.length; i++) {
        let height = parseInt(elements[i].style.height);
        if (height < min) min = height;
        if (height > max) max = height;
    }

    let bucketSize = 5; // Adjust the bucket size as needed
    let numBuckets = Math.ceil((max - min + 1) / bucketSize);
    let buckets = new Array(numBuckets);

    // Initialize buckets
    for (let i = 0; i < numBuckets; i++) {
        buckets[i] = [];
    }

    // Distribute elements into buckets
    for (let i = 0; i < elements.length; i++) {
        let height = parseInt(elements[i].style.height);
        let bucketIndex = Math.floor((height - min) / bucketSize);
        buckets[bucketIndex].push(elements[i]);
    }

    // Visualize buckets (Pink and Blue)
    for (let i = 0; i < buckets.length; i++) {
        let color = i % 2 === 0 ? '#9BBBE9' : '#A8DCD9'; // Pink and Blue colors
        for (let j = 0; j < buckets[i].length; j++) {
            buckets[i][j].style.backgroundColor = color;
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    }

    // Concatenate buckets back into the container
    container.innerHTML = '';
    for (let i = 0; i < buckets.length; i++) {
        container.append(...buckets[i]);
    }
}

//complete
async function stoogeSort() {
    let container = document.getElementById('container');
    let elements = container.children;

    await stoogeSortRecursive(elements, 0, elements.length - 1);
}

//complete
async function stoogeSortRecursive(arr, l, h) {
    if (l >= h) {
        return;
    }

    if (parseInt(arr[l].style.height) > parseInt(arr[h].style.height)) {
        // Swap heights
        let temp = arr[l].style.height;
        arr[l].style.height = arr[h].style.height;
        arr[h].style.height = temp;

        // Visualize swapping
        arr[l].classList.add('comparison');
        arr[h].classList.add('comparison');
        await new Promise(resolve => setTimeout(resolve, 500));
        arr[l].classList.remove('comparison');
        arr[h].classList.remove('comparison');
    }

    if (h - l + 1 > 2) {
        let t = Math.floor((h - l + 1) / 3);

        await stoogeSortRecursive(arr, l, h - t);
        await stoogeSortRecursive(arr, l + t, h);
        await stoogeSortRecursive(arr, l, h - t);
    }
}

//complete
async function combSort() {
        let elements = document.querySelectorAll('.element');
        let len = elements.length;
        let gap = len;
        let shrinkFactor = 1.3;
        let swapped = true;

        while (gap > 1 || swapped) {
            if (gap > 1) {
                gap = Math.floor(gap / shrinkFactor);
            }

            swapped = false;

            for (let i = 0; i + gap < len; i++) {
                let current = elements[i];
                let next = elements[i + gap];

                current.style.backgroundColor = '#CAD6E3';
                next.style.backgroundColor = '#CAD6E3';

                await new Promise(resolve => setTimeout(resolve, 500));

                let currentHeight = current.style.height;
                let nextHeight = next.style.height;

                if (parseInt(currentHeight) > parseInt(nextHeight)) {
                    // Swap heights
                    current.style.height = nextHeight;
                    next.style.height = currentHeight;

                    // Change color after swapping
                    current.style.backgroundColor = '#85C1E9';
                    next.style.backgroundColor = '#85C1E9';

                    swapped = true;
                }

                await new Promise(resolve => setTimeout(resolve, 500));

                // Reset colors
                current.style.backgroundColor = '';
                next.style.backgroundColor = '';
            }
        }
    }

//complete
async function selectionSort() {
    let elements = document.querySelectorAll('.element');
    let len = elements.length;

    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < len; j++) {
            let current = elements[j];
            let minElement = elements[minIndex];

            current.style.backgroundColor = '#CAD6E3';
            minElement.style.backgroundColor = '#CAD6E3';

            await new Promise(resolve => setTimeout(resolve, 500));

            let currentHeight = parseInt(current.style.height);
            let minElementHeight = parseInt(minElement.style.height);

            if (currentHeight < minElementHeight) {
                minIndex = j;
            }

            current.style.backgroundColor = '';
            minElement.style.backgroundColor = '';
        }

        // Swap heights
        let tempHeight = elements[i].style.height;
        elements[i].style.height = elements[minIndex].style.height;
        elements[minIndex].style.height = tempHeight;

        // Change color after swapping
        elements[i].style.backgroundColor = '#85C1E9';
        elements[minIndex].style.backgroundColor = '#85C1E9';

        await new Promise(resolve => setTimeout(resolve, 500));

        // Reset colors
        elements[i].style.backgroundColor = '';
        elements[minIndex].style.backgroundColor = '';
    }
}

//complete
async function quickSort() {
    let elements = document.querySelectorAll('.element');
    let len = elements.length;

    async function partition(low, high) {
        let pivot = parseInt(elements[high].style.height);
        let i = low - 1;

        for (let j = low; j < high; j++) {
            let currentHeight = parseInt(elements[j].style.height);

            if (currentHeight < pivot) {
                i++;
                let temp = elements[i].style.height;
                elements[i].style.height = elements[j].style.height;
                elements[j].style.height = temp;

                elements[i].style.backgroundColor = '#CAD6E3';
                elements[j].style.backgroundColor = '#CAD6E3';

                await new Promise(resolve => setTimeout(resolve, 500));

                elements[i].style.backgroundColor = '';
                elements[j].style.backgroundColor = '';
            }
        }

        let temp = elements[i + 1].style.height;
        elements[i + 1].style.height = elements[high].style.height;
        elements[high].style.height = temp;

        elements[i + 1].style.backgroundColor = '#85C1E9';

        await new Promise(resolve => setTimeout(resolve, 500));

        elements[i + 1].style.backgroundColor = '';

        return i + 1;
    }

    async function quickSortRecursive(low, high) {
        if (low < high) {
            let pivotIndex = await partition(low, high);
            await quickSortRecursive(low, pivotIndex - 1);
            await quickSortRecursive(pivotIndex + 1, high);
        }
    }

    await quickSortRecursive(0, len - 1);
}

//complete
async function heapSort() {
    let elements = document.querySelectorAll('.element');
    let len = elements.length;

    async function heapify(n, i) {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < n && parseInt(elements[left].style.height) > parseInt(elements[largest].style.height)) {
            largest = left;
        }

        if (right < n && parseInt(elements[right].style.height) > parseInt(elements[largest].style.height)) {
            largest = right;
        }

        if (largest !== i) {
            let temp = elements[i].style.height;
            elements[i].style.height = elements[largest].style.height;
            elements[largest].style.height = temp;

            elements[i].style.backgroundColor = '#CAD6E3';
            elements[largest].style.backgroundColor = '#CAD6E3';

            await new Promise(resolve => setTimeout(resolve, 500));

            elements[i].style.backgroundColor = '';
            elements[largest].style.backgroundColor = '';

            await heapify(n, largest);
        }
    }

    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
        await heapify(len, i);
    }

    for (let i = len - 1; i > 0; i--) {
        let temp = elements[0].style.height;
        elements[0].style.height = elements[i].style.height;
        elements[i].style.height = temp;

        elements[0].style.backgroundColor = '#85C1E9';

        await new Promise(resolve => setTimeout(resolve, 500));

        elements[0].style.backgroundColor = '';

        await heapify(i, 0);
    }
}

//complete
async function shellSort() {
    let elements = document.querySelectorAll('.element');
    let len = elements.length;

    for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < len; i++) {
            let temp = elements[i].style.height;
            let j = i;

            while (j >= gap && parseInt(elements[j - gap].style.height) > parseInt(temp)) {
                elements[j].style.height = elements[j - gap].style.height;

                elements[j - gap].style.backgroundColor = '#CAD6E3';
                elements[j].style.backgroundColor = '#CAD6E3';

                await new Promise(resolve => setTimeout(resolve, 500));

                elements[j - gap].style.backgroundColor = '';
                elements[j].style.backgroundColor = '';

                j -= gap;
            }

            elements[j].style.height = temp;

            elements[j].style.backgroundColor = '#85C1E9';

            await new Promise(resolve => setTimeout(resolve, 500));

            elements[j].style.backgroundColor = '';
        }
    }
}