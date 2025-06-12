document.addEventListener('DOMContentLoaded', function() {
    const gridItems = document.querySelectorAll('.grid-item');
    const blockIdInput = document.getElementById('block_id');
    const colorInput = document.getElementById('colour_id');
    const changeButton = document.getElementById('change_button');
    const resetButton = document.getElementById('reset_button');

    gridItems.forEach((item, index) => {
        item.id = (index + 1).toString();
    });

    changeButton.addEventListener('click', function() {
        const blockId = blockIdInput.value;
        const color = colorInput.value.trim();

        if (!blockId || !color) {
            alert('Please enter both Block ID and Color');
            return;
        }

        const blockNumber = parseInt(blockId);
        if (isNaN(blockNumber) || blockNumber < 1 || blockNumber > 9) {
            alert('Please enter a valid Block ID between 1 and 9');
            return;
        }

        gridItems.forEach(item => {
            item.style.backgroundColor = 'transparent';
        });

        const targetBlock = document.getElementById(blockId);
        if (targetBlock) {
            targetBlock.style.backgroundColor = color;
        } else {
            alert('Block not found!');
        }
    });

    resetButton.addEventListener('click', function() {
        gridItems.forEach(item => {
            item.style.backgroundColor = 'transparent';
        });

        blockIdInput.value = '';
        colorInput.value = '';
    });
});
