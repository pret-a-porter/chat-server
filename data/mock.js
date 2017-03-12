import shortId from 'shortid';

export const users = [
  { id: 1, name: 'Tom Coleman', dialogs: [1, 2], avatar: '/assets/img/avatar1.png' },
  { id: 2, name: 'Sashko Stubailo', dialogs: [1, 2], avatar: '/assets/img/avatar2.png' },
  { id: 3, name: 'Tom Hardy', dialogs: [], avatar: '/assets/img/avatar1.png' },
];

export const dialogs = [{
  id: 1,
  user: 1,
  messages: [{
    id: shortId.generate(),
    user: 1,
    text: 'question',
    date: Date.now(),
  }, {
    id: shortId.generate(),
    user: 2,
    text: 'answer',
    date: Date.now(),
  }],
}, {
  id: 2,
  user: 2,
  messages: [{
    id: shortId.generate(),
    user: 1,
    text: 'Привет. Как дела?',
    date: Date.now(),
  }, {
    id: shortId.generate(),
    user: 2,
    text: 'норм',
    date: Date.now(),
  }],
}];
