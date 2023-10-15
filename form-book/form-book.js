
const subMit = () => {
    const form = document.querySelector("form");
    const nameBook = document.querySelector('input[name="name-book"]').value;
    const nameAuthor = document.querySelector('input[name="name-author"]').value;
    let price = document.querySelector('input[name="price"]').value;
    price = parseInt(price);
    let year = document.querySelector('input[name="year"]').value;
    year = parseInt(year);
    const publisher = document.querySelector('input[name="publisher"]').value;
    const result = document.querySelector("#result");

    console.log(`Name Author ${nameAuthor}`);
    console.log(`Name Book ${nameBook}`);
    console.log(`price ${price}`);
    console.log(`year ${year}`);
    console.log(`publisher ${publisher}`);
}



