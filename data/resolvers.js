import shortId from 'shortid';
import { users, dialogs } from './mock';

const resolveFunctions = {
  Query: {
    users() {
      return users;
    },
    dialogs(_, { userId }) {
      const user = users.find(({ id }) => id === userId);
      return dialogs.filter(({ id }) => user.dialogs.includes(id));
    },
    messages(_, { dialogId }) {
      if (!dialogId) return [];
      const dialog = dialogs.find(({ id }) => id === dialogId);
      return dialog.messages;
    },
  },
  Mutation: {
    addMessage(_, { dialogId, userId, text }) {
      const dialog = dialogs.find(({ id }) => id === dialogId);
      dialog.messages.push({
        id: shortId.generate(),
        user: userId,
        text,
        date: Date.now(),
      });
      return dialog.messages;
    },
  },
};

export default resolveFunctions;
