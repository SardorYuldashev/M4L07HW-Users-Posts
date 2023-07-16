import { makeExecutableSchema } from '@graphql-tools/schema';
import usersModule from '../modules/users/_index.js';
import postsModule from '../modules/posts/_index.js';

const typdefsArr = [
  usersModule.typeDefs,
  postsModule.typeDefs
];

const resolversArr = [
  usersModule.resolvers,
  postsModule.resolvers
];

export const schema = makeExecutableSchema({
  typeDefs: typdefsArr,
  resolvers: resolversArr,
});