const mongoose = require('mongoose');
const Book = require('./models/book'); // Adjust the path as needed
const booksData = require('./data/books.json'); // Adjust the path as needed

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/project-mongo";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const seedDatabase = async () => {
  await Book.deleteMany({}); // Clears the existing books collection

  booksData.forEach(async (bookData) => {
    const newBook = new Book(bookData);
    await newBook.save();
  });
  
  console.log('Database has been seeded!');
};

seedDatabase().then(() => {
  setTimeout(() => { mongoose.connection.close() }, 1500)
});
//Seeding a database is the process of populating it with initial data.//
//This is especially useful in development and testing environments, where you need a predictable and consistent set of data to work with.//
 //Seeding is typically done when the database is first set up, or when it's reset or refreshed. //
 //Seeding helps in setting up a database in a state that is ready for use either for development, testing, or demonstration purposes. It's a crucial part of the development workflow but should be handled carefully to avoid conflicts or issues, 
 //especially in shared development environments or when dealing with sensitive data.//
