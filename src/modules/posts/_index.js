import { readFileSync } from 'fs';
import { join } from 'path';
import { pubsub } from '../../graphql/pubsub.js';
import { ForbiddedError } from '../../shared/errors/index.js';
import { isLoggedIn } from '../../graphql/is-loggedin.js';
import { listPosts } from './list-posts.js';
import { showPost } from './show-post.js';
import { showUser } from './../users/show-user.js';
import { addPost } from './add-post.js';
import { verifyPost } from './verifed-post.js';
import { unVerifyPost } from './un-verified-post.js';
import { editPost } from './edit-post.js';
import { deletePost } from './delete-post.js';

const typeDefs = readFileSync(
  join(process.cwd(), 'src', 'modules', 'posts', '_schema.gql'),
  'utf8'
);

const resolvers = {
  Query: {
    posts: (_, __, contextValue) => {
      isLoggedIn(contextValue);

      return listPosts(contextValue.user);
    },
    post: (_, args) => {
      return showPost({ id: args.id });
    }
  },
  Mutation: {
    createPost: async (_, args, contextValue) => {
      isLoggedIn(contextValue);

      const result = await addPost(contextValue.user.id, args.input);

      pubsub.publish('POST_CREATED', { postCreated: result });

      return result;
    },

    verifiedPost: async (_, args, contextValue) => {
      isLoggedIn(contextValue);

      if (contextValue.user.role === 'user') {
        throw new ForbiddedError("Bu yo'l faqat adminlar uchun");
      };

      return verifyPost({ id: args.id, admin: contextValue.user.id });
    },

    unVerifiedPost: async (_, args, contextValue) => {
      isLoggedIn(contextValue);

      if (contextValue.user.role === 'user') {
        throw new ForbiddedError("Bu yo'l faqat adminlar uchun");
      };

      return unVerifyPost({ id: args.id });
    },

    updatePost: (_, args, contextValue) => {
      isLoggedIn(contextValue);

      return editPost({ id: args.id, author_id: contextValue.user.id, ...args.input });
    },

    deletePost: (_, args, contextValue) => {
      isLoggedIn(contextValue);

      return deletePost({ id: args.id, user: contextValue.user });
    }
  },
  Subscription: {
    postCreated: {
      subscribe: () => pubsub.asyncIterator(['POST_CREATED']),
    }
  },
  Post: {
    author: (parent) => {
      return showUser({ id: parent.user_id });
    },
    verified_by: (parent) => {
      if (!parent.verified_by) {
        return null;
      };

      return showUser({ id: parent.verified_by });
    }
  }
};

export default { typeDefs, resolvers };