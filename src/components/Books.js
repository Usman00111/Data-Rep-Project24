import BookItem from "./BookItem";

//books comp receives books array and reloaddata func as props 
const Books = ({ books, ReloadData }) => {
    return (
        <div>
            {console.log(books)} {/*logs the books data for debugging */}
            {/* using map() to iterate over the book array and render a bookitem for each book */}
            {books.map((book, index) => {
                return <BookItem book={book} key={index} Reload={ReloadData} /> // pass hook data and reload func to each bookitem
            })}
        </div>
    );
};

export default Books;