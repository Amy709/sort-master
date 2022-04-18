import React, { Component } from 'react';
import './App.css';

import AppControls from './components/molecules/AppControls';
import TopBar from './components/organisms/TopBar';
import AppDrawer from './components/organisms/AppDrawer';
import SortVisualizer from './components/organisms/SortVisualizer';
import Footer from './components/molecules/Footer';

import BubbleSort, {
    BubbleSortKey,
    BubbleSortDesc
} from './algorithms/BubbleSort';
import SelectionSort, {
    SelectionSortKey,
    SelectionSortDesc
} from './algorithms/SelectionSort';
import InsertionSort, {
    InsertionSortKey,
    InsertionSortDesc
} from './algorithms/InsertionSort';
import MergeSort, {
    MergeSortKey,
    MergeSortDesc
} from './algorithms/MergeSort';
import QuickSort, {
    QuickSortKey,
    QuickSortDesc
} from './algorithms/QuickSort';

import HeapSort, {
    HeapSortKey,
    HeapSortDesc
} from './algorithms/HeapSort';
import ShellSort, {
    ShellSortKey,
    ShellSortDesc
} from './algorithms/ShellSort';

class App extends Component {
    state = {

        array: [],
        arraySize: 10,
        trace: [],
        algorithm: null,
        appDrawerOpen: false
    };

    ALGORITHM = {
        'Bubble Sort': BubbleSort,
        'Selection Sort': SelectionSort,
        'Insertion Sort': InsertionSort,
        'Merge Sort': MergeSort,
        'Quick Sort': QuickSort,
        'Heap Sort': HeapSort,
        'Shell Sort': ShellSort
    };

    ALGORITHM_KEY = {
        'Bubble Sort': BubbleSortKey,
        'Selection Sort': SelectionSortKey,
        'Insertion Sort': InsertionSortKey,
        'Merge Sort': MergeSortKey,
        'Quick Sort': QuickSortKey,
        'Heap Sort': HeapSortKey,
        'Shell Sort': ShellSortKey
    };

    ALGORITHM_DESC = {
        'Bubble Sort': BubbleSortDesc,
        'Selection Sort': SelectionSortDesc,
        'Insertion Sort': InsertionSortDesc,
        'Merge Sort': MergeSortDesc,
        'Quick Sort': QuickSortDesc,
        'Heap Sort': HeapSortDesc,
        'Shell Sort': ShellSortDesc
    };

    componentDidMount() {
        this.generateRandomArray();
    }

    generateRandomArray = () => {
        // Generate pseudo-random number between 1 and max
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max)) + 1;
        }

        // Generate an array of length max
        const array = Array(this.state.arraySize)
            .fill(0)
            .map(() => getRandomInt(this.state.arraySize * 5));

        this.setState({
                array,
                trace: []
            },
            this.createTrace
        );
    };

    handleAlgorithmChange = (algorithm) => {
        this.setState({ algorithm }, this.generateRandomArray);
    };


    createTrace = () => {
        const numbers = [...this.state.array];
        const sort = this.ALGORITHM[this.state.algorithm];
        if (sort) {
            const trace = sort(numbers);
            this.setState({ trace });
        }
    };



    toggleAppDrawer = () => {
        this.setState((prevState) => ({
            appDrawerOpen: !prevState.appDrawerOpen
        }));
    };

    render() {
        let theme = `App`;

        if (this.state.appDrawerOpen) theme += ` App_modal_open`;

        const colorKey = this.ALGORITHM_KEY[this.state.algorithm];
        const desc = this.ALGORITHM_DESC[this.state.algorithm];

        const controls = ( <
            AppControls onGenerateRandomArray = { this.generateRandomArray }
            algorithm = { this.state.algorithm }
            onAlgorithmChange = { this.handleAlgorithmChange }
            arraySize = { this.state.arraySize }
            onArraySizeChange = { this.handleArraySizeChange }

            />
        );

        return ( <
            div className = { theme } >

            <
            TopBar drawerOpen = { this.state.appDrawerOpen }
            toggleDrawer = { this.toggleAppDrawer } > { controls } <
            /TopBar>


            <
            AppDrawer open = { this.state.appDrawerOpen }
            closeDrawer = { this.toggleAppDrawer } > { controls } <
            /AppDrawer>


            <
            main className = "App__Body" >
            <
            SortVisualizer array = { this.state.array }
            trace = { this.state.trace }
            colorKey = { colorKey }
            desc = { desc }
            />  <
            /main> <
            Footer / >

            <
            /div>
        );
    }
}

export default App;