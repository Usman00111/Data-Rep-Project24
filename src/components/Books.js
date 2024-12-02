import BookItem from "./BookItem";

//const Books to display list of books
const Books = ({ books, ReloadData }) => {
    return (
        <div>
            {console.log(books)} {/*logs the books data for debugging */}
            {/* using map() to iterate over the book array and pass each book as props to the bookitem comp */}
            {books.map((book, index) => {
                return <BookItem book={book} key={index} Reload={ReloadData} />
            })}
        </div>
    );
};

export default Books;