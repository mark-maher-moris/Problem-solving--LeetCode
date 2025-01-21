function spiralOrder(matrix: number[][]): number[] {
    const result: number[] = [];
    
//Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]

    while (matrix.length > 0) {
        // #1) Add the first row/list of the matrix
        result.push(...matrix.shift()!);

        // #2) Append the last element of all lists in order
        if (matrix.length > 0 && matrix[0].length > 0) {
            for (const row of matrix) {
                result.push(row.pop()!);
            }
        }

        // #3) Add reverse of the last row/list
        if (matrix.length > 0) {
            result.push(...(matrix.pop()!.reverse()));
        }

        // #4) Append the first element of all rows/lists in reverse
        if (matrix.length > 0 && matrix[0].length > 0) {
            for (let i = matrix.length - 1; i >= 0; i--) {
                result.push(matrix[i].shift()!);
            }
        }
    }

    return result;
}


// My Solution Was 
//Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]

// Get Matrix M X N :    M | matrix length              N -- length length of any array 
// Add First List (for the fisrt horizontal Row to R )
// add First last valu of each List (for the Virtical Right Column )
// add the last array (For the last Matrix Row )
// Adding left Column First index for each array - the first [0][0]
// Adding inner first Row : Secound array - last index Becouse we in the secound iteration so we removed index form the desired array right




