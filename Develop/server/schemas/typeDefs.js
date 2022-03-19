// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type Query {
    username: String
    email: String
  }
  type me {
    getUserType(username: type): User
  }
  type Mutation {
    login(email: String!, password: String!): User
    addUser(username: String!, email: String!, password: String!): User
    saveBooks(
      authors: String!
      description: String!
      bookId: String!
      image: String!
      link: String!
      title: String!
    ): Book
    removeBook(bookId: String): User
  }
`;

// The Query

// export the typeDefs
module.exports = typeDefs;
