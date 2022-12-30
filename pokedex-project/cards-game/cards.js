const board = document.querySelector(".board")


// Generate the data
 //when we use "[]" in an arrow function it return an array

const getData = () => [                     

    {imgSrc : 'insert image', name: "insert name"},
    {imgSrc : 'insert image', name: "insert name"},
    {imgSrc : 'insert image', name: "insert name"},
    {imgSrc : 'insert image', name: "insert name"},
    {imgSrc : 'insert image', name: "insert name"},
    {imgSrc : 'insert image', name: "insert name"},
    {imgSrc : 'insert image',name: "insert name"},
    {imgSrc : 'insert image',name: "insert name"},
    {imgSrc : 'insert image',name: "insert name"},
    {imgSrc : 'insert image',name: "insert name"},
    {imgSrc : 'insert image',name: "insert name"},
    {imgSrc : 'insert image',name: "insert name"},
    {imgSrc : 'insert image',name: "insert name"},
    {imgSrc : 'insert image',name: "insert name"},
    {imgSrc : 'insert image',name: "insert name"},
    {imgSrc : 'insert image',name: "insert name"},
]

// Generate random cards 

function randomize() {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5)
}