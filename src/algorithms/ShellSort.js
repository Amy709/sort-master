import React from 'react';
import {
    swap,
    newTrace,
    addToTrace,
    createRange,
    createKey
} from './helpers';

const ShellSort = (nums) => {
    const trace = newTrace(nums);

    for (
        let gap = Math.floor(nums.length / 2); gap > 0; gap = Math.floor(gap / 2)
    ) {
        for (let j = gap; j < nums.length; j++) {
            for (let i = j - gap; i >= 0; i -= gap) {
                addToTrace(trace, nums, [], [i, i + gap]);
                if (nums[i + gap] < nums[i]) {
                    addToTrace(trace, nums, [], [], [i, i + gap]);
                    swap(nums, i, i + gap);
                    addToTrace(trace, nums, [], [], [i, i + gap]);
                } else {
                    break;
                }
            }
        }
    }

    addToTrace(trace, nums, createRange(0, nums.length));
    return trace;
};

export const ShellSortKey = createKey('Comparing', 'Swapping');

export const ShellSortDesc = {
        title: 'Shell Sort',
        description: ( <
            div >
            <
            p >
            <
            a href = "https://www.javatpoint.com/shell-sort"
            target = "_blank"
            rel = "noopener noreferrer" >
            Shell Sort <
            /a>
            has improved the average time complexity of insertion sort.As similar to insertion sort, it is a comparison - based and in -place sorting algorithm.Shell sort is efficient
            for medium - sized data sets.

            In insertion sort, at a time, elements can be moved ahead by one position only.To move an element to a far - away position, many movements are required that increase the algorithm 's execution time. But shell sort overcomes this drawback of insertion sort. It allows the movement and swapping of far-away elements as well.

            This algorithm first sorts the elements that are far away from each other, then it subsequently reduces the gap between them.This gap is called as interval.This interval can be calculated by using the Knuth 's <
            /p> <
            /div>
        ),
        worstCase: ( <
                span >
                O( < em > n < /em> <
                    sup > 2 < /sup>) <
                    /span>
                ),
                avgCase: ( <
                    span >
                    O( < em > n < /em> <
                        sup > 3 / 2 < /sup>) <
                        /span>
                    ),
                    bestCase: ( <
                        span >
                        O( < em > n < /em> log <em>n</em > ) <
                        /span>
                    ),
                    space: < span > O(1) < /span>
                };

                export default ShellSort;