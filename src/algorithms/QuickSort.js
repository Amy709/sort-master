import React from 'react';
import {
    swap,
    newTrace,
    addToTrace,
    lastSorted,
    createRange,
    createKey
} from './helpers';

const QuickSort = (nums) => {
    // Initial State
    const trace = newTrace(nums);

    function choosePivot(array, start, end) {
        // randomly pick an element between start and end;
        return Math.floor(Math.random() * (end - start)) + start;
    }

    function partition(array, start, end) {
        let i = start + 1;
        let j = start + 1;

        // Visualize: Keep pivot marked
        addToTrace(trace, array, lastSorted(trace), [start]);

        while (j <= end) {
            if (array[j] < array[start]) {
                // Visualize: Mark item that is less than pivot
                addToTrace(
                    trace,
                    array,
                    lastSorted(trace), [start], [j], [],
                    createRange(start + 1, i)
                );

                swap(array, i, j);

                // Visualize: Move item to lesser list
                addToTrace(
                    trace,
                    array,
                    lastSorted(trace), [start], [i], [],
                    createRange(start + 1, i)
                );
                i += 1;
            }
            j += 1;
        }

        // Visualize: Mark center position
        addToTrace(
            trace,
            array,
            lastSorted(trace), [i - 1], [], [],
            createRange(start, i - 1)
        );
        swap(array, start, i - 1);

        // Visualize: Move pivot to center
        addToTrace(
            trace,
            array,
            lastSorted(trace), [i - 1], [], [],
            createRange(start, i - 1)
        );
        return i - 1;
    }

    function recursiveQuickSort(array, start, end) {
        if (start >= end) {
            if (start === end) {
                // Visualize: Mark only item as sorted
                addToTrace(trace, array, [...lastSorted(trace), start]);
            }
            return null;
        }

        let pivot = choosePivot(array, start, end);

        // Visualize: Mark chosen pivot
        addToTrace(trace, array, lastSorted(trace), [pivot]);

        swap(array, start, pivot);

        // Visualize: Move chosen pivot to start
        addToTrace(trace, array, lastSorted(trace), [pivot]);

        pivot = partition(array, start, end);

        // Visualize: Mark pivot after partition as sorted
        addToTrace(trace, array, [...lastSorted(trace), pivot]);

        recursiveQuickSort(array, start, pivot - 1);
        recursiveQuickSort(array, pivot + 1, end);
    }

    recursiveQuickSort(nums, 0, nums.length - 1);

    return trace;
};

export const QuickSortKey = createKey(
    'Comparing',
    'Swapping',
    null,
    'Less than pivot'
);

export const QuickSortDesc = {
        title: 'Quick Sort',
        description: ( <
            div >
            <
            p >
            <
            a href = "https://www.javatpoint.com/quick-sort"
            target = "_blank"
            rel = "noopener noreferrer" >
            Quick Sort <
            /a>{' '}
            is the widely used sorting algorithm that makes n log n comparisons in average
            case for sorting an array of n elements.It is a faster and highly efficient sorting algorithm.This algorithm follows the divide and conquer approach.Divide and conquer is a technique of breaking down the algorithms into subproblems, then solving the subproblems, and combining the results back together to solve the original problem. <
            /p> <
            ol >
            <
            li >
            Pick an element, called a pivot, from the array.This is usually done at random. <
            /li> <
            li > Move pivot element to the start of the array. < /li> <
            li >
            <
            em > Partitioning:
                < /em> reorder the array so that all elements
                with values less than the pivot come before the pivot,
                while all elements with values greater than the pivot come after it(equal values can go either way).After this partitioning, the pivot is in its final position.This is called the { ' ' } <
                em > partition < /em> operation. <
                /li> <
                li >
                Recursively apply the above steps to the sub - array of elements with smaller values and separately to the sub - array of elements with greater values. <
                /li> <
                /ol> <
                p >
                The base
            case of the recursion is an array of size zero or one,
            which are sorted by definition. <
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
                    O( < em > n < /em>log<em>n</em > ) <
                    /span>
                ),
                bestCase: ( <
                    span >
                    O( < em > n < /em>log<em>n</em > ) <
                    /span>
                ),
                space: ( <
                    span >
                    O(log < em > n < /em>) <
                        /span>
                    )
                };

                export default QuickSort;