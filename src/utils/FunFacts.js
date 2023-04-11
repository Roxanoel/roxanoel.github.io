const itemOneList = [
        'I was once bitten by a bat',
        'I have a PhD in Philosophy from Cambridge',
        'I can read and translate medieval Latin',
        'I am a self-taught developer',
        'I sew my own clothes as a hobby',
        'I was a Gates Cambridge Scholar',
    ];
const itemTwoList = [
        'I am a beginner kickboxer',
        'I am from Montréal',
        'Italian cuisine is my favourite',
        'My tiramisu is excellent',
        'My first language is French',
        'I am passionate about video games',
    ];
const itemThreeList = [
    'I can play the drums',
    'I am a bit of a karaoke legend',
    'I watch way too much reality TV',
    'Pitbulls are my favourite dogs',
    'I love siamese cats',
    'I studied psychology in university',
    ];

const getItemOne = () => {
    // Random index 
    const randomIndex = Math.floor(Math.random() * itemOneList.length)
    // Return corresponding element
    return itemOneList[randomIndex];
}
const getItemTwo = () => {
    // Random index 
    const randomIndex = Math.floor(Math.random() * itemTwoList.length)
    // Return corresponding element
    return itemTwoList[randomIndex];
}
const getItemThree = () => {
    // Random index 
    const randomIndex = Math.floor(Math.random() * itemTwoList.length)
    // Return corresponding element
    return itemThreeList[randomIndex];
}

export{
    getItemOne,
    getItemTwo,
    getItemThree,
}
