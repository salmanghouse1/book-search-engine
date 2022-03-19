const { User, Book } = require("../models");

const resolvers = {
  Query: {
    username: async () => {
      return User.find().sort({ createdAt: -1 });
    },
    getUserType: async () => {
      return User.find();
    },
    // place this inside of the `Query` nested object right after `thoughts`
    Mutation: {
      addUser: async (parent, username, email, password) => {
        const user = await User.create(email, password, username);

        return user;
      },
      addBook: async (
        parent,
        authors,
        description,
        bookId,
        image,
        link,
        title
      ) => {
        const book = await Book.create(
          authors,
          description,
          bookId,
          image,
          link,
          title
        );

        return book;
      },
      removeBook: async (parent, id) => {
        const removeBook = await Book.destroy(id);
        const allBooks = Book.findAll();
        return allBooks;
      },
    },
  },
};

module.exports = resolvers;
