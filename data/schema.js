import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers';

const schema = `
type User {
  id: Int!
  name: String,
  dialogs: [Int]
  avatar: String
}

type Dialog {
  id: Int!
  user: Int!
  messages: [Message]
}

type Message {
  id: String!
  user: Int!
  text: String
  date: String
}

# the schema allows the following query:
type Query {
  users: [User]
  dialogs(userId: Int!): [Dialog],
  messages(dialogId: Int): [Message]
}

# this schema allows the following mutation:
type Mutation {
  addMessage (
    dialogId: Int!
    userId: Int!
    text: String
  ) : [Message]
}

`;

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});
