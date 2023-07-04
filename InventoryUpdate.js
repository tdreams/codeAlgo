/* Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item. */

const updateInv = (arr1, arr2) => {
  //find an item in inventory using name
  const findItemIndex = (inventory, item) => {
    return inventory.findIndex(([_, itemName]) => itemName === item);
  };

  for (const [quantity, item] of arr2) {
    const index = findItemIndex(arr1, item);
    if (index !== -1) {
      arr1[index][0] += quantity;
    } else {
      arr1.push([quantity, item]);
    }
  }
  return arr1.sort((a, b) => a[1].localeCompare(b[1]));
};
