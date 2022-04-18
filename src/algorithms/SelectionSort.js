import React from 'react';
import {
    swap,
    newTrace,
    addToTrace,
    lastSorted,
    createKey
} from './helpers';

const SelectionSort = (nums) => {
    // Initial State
    const trace = newTrace(nums);

    // Core Algorithm
    for (let i = 0; i < nums.length - 1; i++) {
        // Internal Loop: Find index of min value
        let minIndex = i;
        for (let j = i + 1; j < nums.length; j++) {
            // Visualize: comparing A[j] to A[minIndex]
            addToTrace(trace, nums, lastSorted(trace), [minIndex, j]);
            if (nums[j] < nums[minIndex]) {
                // Visualize: discovered new minIndex
                addToTrace(trace, nums, lastSorted(trace), [minIndex], [j]);
                minIndex = j;
                // Visualize: reassign new minIndex;
                addToTrace(trace, nums, lastSorted(trace), [minIndex], [j]);
            }
        }

        // Visualize: i'th value to be swapped with min value
        addToTrace(trace, nums, lastSorted(trace), [], [i, minIndex]);

        swap(nums, i, minIndex);

        // Visualize: i'th value has been swapped with min value
        addToTrace(trace, nums, [...lastSorted(trace), i], [], []);
    }

    // Visualize: Final item in the array is sorted
    addToTrace(trace, nums, [...lastSorted(trace), nums.length - 1]);

    return trace;
};

export const SelectionSortKey = createKey('Comparing', 'Swapping');

export const SelectionSortDesc = {
        title: 'Selection Sort',
        description: ( <
            p >
            <
            a href = "https://www.javatpoint.com/selection-sort"
            target = "_blank"
            rel = "noopener noreferrer" >
            Selection Sort, <
            /a>{' '}
            the smallest value among the unsorted elements of the array is selected in every pass and inserted to its appropriate position into the array.It is also the simplest algorithm.It is an in -place comparison sorting algorithm.In this algorithm, the array is divided into two parts, first is sorted part, and another one is the unsorted part.Initially, the sorted part of the array is empty, and unsorted part is the given array.Sorted part is placed at the left,
            while the unsorted part is placed at the right. <
            /p>
        ),
        worstCase: ( <
                span >
                O(n < sup > 2 < /sup>) <
                    /span>
                ),
                avgCase: ( <
                    span >
                    O(n < sup > 2 < /sup>) <
                        /span>
                    ),
                    bestCase: ( <
                        span >
                        O(n < sup > 2 < /sup>) <
                            /span>
                        ),
                        space: < span > O(1) < /span>
                    };

                    export default SelectionSort;