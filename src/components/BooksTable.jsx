const books = [
  {
    id: 1,
    name: "Mitari alev",
    author: "shimon britkoft",
    price: 20,
  },
  {
    id: 2,
    name: "Gesher zar",
    author: "David zarizki",
    price: 50,
  },
  {
    id: 3,
    name: "tehilot",
    author: "shimrit",
    price: 60,
  },
];

function BooksTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Author</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.name}</td>
            <td>{book.author}</td>
            <td>{book.price}₪</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BooksTable;
