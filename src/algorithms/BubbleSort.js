import React from 'react';
import {
    swap,
    newTrace,
    addToTrace,
    lastSorted,
    createKey
} from './helpers';

const BubbleSort = (nums) => {
    // Set up code for tracing the algorithm
    const trace = newTrace(nums);

    // Sorting Algorithm with trace capture
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - i - 1; j++) {
            // Visualize: Comparing A[j] and A[j + 1]
            addToTrace(trace, nums, lastSorted(trace), [j, j + 1]);
            if (nums[j] > nums[j + 1]) {
                swap(nums, j, j + 1);
                // Visualize: Swap A[j] and A[j + 1]
                addToTrace(trace, nums, lastSorted(trace), [], [j, j + 1]);
            }
        }

        // Visualize: final value is sorted
        addToTrace(trace, nums, [
            ...lastSorted(trace),
            nums.length - 1 - i
        ]);
    }

    return trace;
};

export const BubbleSortKey = createKey('Comparing', 'Swapping');
export const BubbleSortDesc = {
        title: 'Bubble Sort',
        description: ( <
            p >
            <
            a href = "https://www.javatpoint.com/bubble-sort"
            target = "_blank"
            rel = "noopener noreferrer" >
            Bubble Sort <
            /a>{' '}
            works on the repeatedly swapping of adjacent elements until they are not in the intended order.It is called bubble sort because the movement of array elements is just like the movement of air bubbles in the water.Bubbles in water rise up to the surface; similarly, the array elements in bubble sort move to the end in each iteration. <
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
                    bestCase: < span > O(n) < /span>,
                    space: < span > O(1) < /span>
                };
                export default BubbleSort;