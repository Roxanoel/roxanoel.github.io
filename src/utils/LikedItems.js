const itemOneList = [
        'programming',
        'video games',
        'sewing',
        'Morrowind',
        'fashion'
    ];
const itemTwoList = [
        'pitbulls',
        'kickboxing',
        'tiramisu',
        'reality TV',
        'hiking'
    ];

const getLikedItemOne = () => {
    // Random index 
    const randomIndex = Math.floor(Math.random() * itemOneList.length)
    // Return corresponding element
    return itemOneList[randomIndex];
}
const getLikedItemTwo = () => {
    // Random index 
    const randomIndex = Math.floor(Math.random() * itemTwoList.length)
    // Return corresponding element
    return itemTwoList[randomIndex];
}

export{
    getLikedItemOne,
    getLikedItemTwo,
}
