var filterForShownItems = (items, keepIndexArray) => {
    let shownItems = [];
    for (let i = 0; i < keepIndexArray.length; i++) {
        if (items[keepIndexArray[i]] !== undefined) {
            shownItems.push(items[keepIndexArray[i]]);    
        }
    }
    return shownItems;
}

export default filterForShownItems;