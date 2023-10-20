
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
    let listBooks = [];
    listBooks.push(`
        <article class="card">
            <header>
                <h3>Name Book : ${nameBook}</h3>
            </header>
            <footer>
                <p>Name Author: ${nameAuthor}</p>
                <p>Price: ${price}</p>
                <p>Year: ${year}</p>
                <p>Publisher : ${publisher}</p>
            </footer>
        </article>
    `);
    for (let i = 0; i < listBooks.length; i++) {
        result.innerHTML += `${listBooks[i]} <br>`;
    }
}



