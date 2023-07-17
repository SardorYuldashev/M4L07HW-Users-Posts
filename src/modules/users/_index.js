import { readFileSync } from 'fs';
import { join } from 'path';
import { pubsub } from '../../graphql/pubsub.js';
import { ForbiddedError } from '../../shared/errors/index.js';
import { isLoggedIn } from '../../graphql/is-loggedin.js';
import { addUser } from './add-user.js';
import { listUsers } from './list-users.js';
import { showUser } from './show-user.js';
import { editUser } from './edit-user.js';
import { removeUser } from './remove-user.js';
import { loginUser } from './login-user.js';
import { addAdmin } from './add-admin.js';
import { appointAdmin } from './appoin-admin.js';
import { removalAdmin } from './removal-admin.js';

const typeDefs = readFileSync(
  join(process.cwd(), 'src', 'modules', 'users', '_schema.gql'),
  'utf8'
);

const resolvers = {
  Query: {
    users: (_, __, contextValue) => {
      isLoggedIn(contextValue);

      return listUsers();
    },

    user: (_, args, contextValue) => {
      isLoggedIn(contextValue);

      return showUser({ id: args.id });
    }
  },
  Mutation: {
    createUser: async (_, args) => {

      const result = await addUser(args.input);

      pubsub.publish('USER_CREATED', { userCreated: result });

      return result;
    },

    createAdmin: async (_, args, contextValue) => {
      isLoggedIn(contextValue);

      if (contextValue.user.role !== "super_admin") {
        throw new ForbiddedError("Bu yo'l faqat super_admin uchun");
      };

      const result = await addAdmin(args.input);

      pubsub.publish('ADMIN_CREATED', { adminCreated: result });

      return result;
    },

    appointAdmin: async (_, args, contextValue) => {
      isLoggedIn(contextValue);

      if (contextValue.user.role !== "super_admin") {
        throw new ForbiddedError("Bu yo'l faqat super_admin uchun");
      };

      const result = await appointAdmin({ id: args.id });

      return result;
    },

    removalAdmin: async (_, args, contextValue) => {
      isLoggedIn(contextValue);

      if (contextValue.user.role !== "super_admin") {
        throw new ForbiddedError("Bu yo'l faqat super_admin uchun");
      };

      const result = await removalAdmin({ id: args.id });

      return result;
    },

    updateUser: (_, args, contextValue) => {
      isLoggedIn(contextValue);

      if (contextValue.user.id !== +args.id) {
        throw new ForbiddedError("Faqat o'z profilingizni tahrirlay olasiz");
      };

      return editUser({ id: args.id, ...args.input });
    },

    removeUser: (_, args, contextValue) => {
      isLoggedIn(contextValue);

      if (contextValue.user.role !== "super_admin") {
        throw new ForbiddedError("Bu yo'l faqat super_admin uchun");
      };

      if (contextValue.user.role === "super_admin" && contextValue.user.id === +args.id) {
        throw new ForbiddedError("Super_admin ketsa shuncha ish kimga qoladi?");
      };

      return removeUser({ id: args.id });
    },

    loginUser: (_, args) => {
      return loginUser(args.input);
    },
  },
  Subscription: {
    userCreated: {
      subscribe: () => pubsub.asyncIterator(['USER_CREATED']),
    },
    adminCreated: {
      subscribe: () => pubsub.asyncIterator(['ADMIN_CREATED']),
    },
  },
  User: {
    full_name: (parent) => {
      return `${parent.first_name} ${parent.last_name}`;
    }
  }
};

export default { typeDefs, resolvers };