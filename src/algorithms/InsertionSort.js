import React from 'react';
import { newTrace, addToTrace, createKey } from './helpers';

const InsertionSort = (nums) => {
    // Initial State
    const trace = newTrace(nums);

    // Core Algorithm
    for (let i = 1; i < nums.length; i++) {
        let value = nums[i];
        let hole = i;
        // Visualize: Hole has been selected for comparison
        addToTrace(trace, nums, [], [i]);
        while (hole > 0 && nums[hole - 1] > value) {
            // Visualize: Compare hole to value
            addToTrace(trace, nums, [], [hole], [hole - 1]);
            nums[hole] = nums[hole - 1];
            hole -= 1;
            // Visualize: Overwrite hole with hole - 1
            addToTrace(trace, nums, [], [], [hole, hole + 1]);
        }
        // Visualize: Overwrite hole with value
        addToTrace(trace, nums, [], [], [], [hole]);
        nums[hole] = value;
        // Visualize: value is in sorted position
        addToTrace(trace, nums, [], [], [], [hole]);
    }

    // Visualize: Mark all elements as sorted
    addToTrace(trace, nums, [...Array(nums.length).keys()]);
    return trace;
};

export const InsertionSortKey = createKey(
    'Comparing',
    'Swapping',
    'Overwrite from memory'
);
export const InsertionSortDesc = {
        title: 'Insertion Sort',
        description: ( <
            p >
            <
            a href = "https://www.javatpoint.com/insertion-sort"
            target = "_blank"
            rel = "noopener noreferrer" >
            Insertion Sort <
            /a>{' '}
            works similar to the sorting of playing cards in hands.It is assumed that the first card is already sorted in the card game, and then we select an unsorted card.If the selected unsorted card is greater than the first card, it will be placed at the right side; otherwise, it will be placed at the left side.Similarly, all unsorted cards are taken and put in their exact place.

            The same approach is applied in insertion sort.The idea behind the insertion sort is that first take one element, iterate it through the sorted array.Although it is simple to use, it is not appropriate
            for large data sets as the time complexity of insertion sort in the average
            case and worst
            case is O(n2), where n is the number of items.Insertion sort is less efficient than the other sorting algorithms like heap sort, quick sort, merge sort, etc. <
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

                export default InsertionSort;