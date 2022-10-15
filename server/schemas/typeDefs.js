const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        bookCount: String
        savedBooks: [Book]!
    }

    type Book {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        Link: String
    }

    input BookInput {
        authors: [String]
        description: String
        title: String
        image: String
        Link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
        books(username: String): [Book]
        book(bookId: ID!): Thought
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String): Auth
        login(email: String!, password: String!): Auth
        saveBook( bookID: ID! input: BookInput): User
        removeBook(bookID: ID! ): User

    }
`;

module.exports = typeDefs;