export function bubbleSort(array) {

    for(let i = 0; i < array.length; i++)
        for(let j = 0; j < array.length; j++)
            if(array[i] < array[j]) {
                array[i] += array[j];
                array[j] = array[i] - array[j];
                array[i] -= array[j];
            }

    return array;
}