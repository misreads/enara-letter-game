export const shuffleArray = (array) => array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

export const findNeighbours = (array, row, col) => {
    const rows = array.length;
    const cols = array.length;

    const neighbours = [];

    for (let j = row - 1; j <= row + 1; j += 1) {
        for (let i = col - 1; i <= col + 1; i += 1) {
            if (i >= 0 && j >= 0 && i < cols && j < rows && !(j === row && i === col)) {
                const tile = array[j][i];
                if (!tile.isSelected) {
                    const neighbour = { ...tile, row: j, col: i };
                    neighbours.push(neighbour);
                }
            }
        }
    }

    return neighbours;
};
