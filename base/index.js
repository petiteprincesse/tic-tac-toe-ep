// Иммутабельность

const app = document.getElementById('app');
const j = (obj) => (app.innerHTML = JSON.stringify(obj, null, 2));

//=========
const obj = { id: 1 };
const obj2 = obj;
obj2.id = 2;
obj2.title = 'title';

j(obj);
//=========

const user = {
  id: 1,
  name: 'evgeny',
  posts: [
    { id: 1, title: 'React 1' },
    { id: 2, title: 'React 2' },
    { id: 3, title: 'React 3' },
    { id: 4, title: 'React 4' },
  ],
};

const updatedUser = {
  ...user,
  posts: [...user.posts, { id: 5, title: 'React 5' }],
  name: 'evgeny bloger',
};

j(updatedUser.posts === user.posts);

// Добавление/Обновление поля объекта
const user2 = {
  id: 1,
  name: 'evgeny',
};

const user3 = {
  ...user,
  name: 'evgeny bloger',
  status: 'hero',
};

const user4 = Object.assign({}, user2, {
  name: 'evgeny bloger',
  status: 'hero',
});

const deepUser = {
  id: 1,
  name: 'evgeny',
  post: {
    title: 'hey',
  },
  photo: {
    url: 'http//...',
  },
};

const deepUser2 = {
  ...deepUser,
  post: {
    ...deepUser.post,
    title: 'hoy',
  },
};
j(deepUser.photo === deepUser2.photo);
// Удаление поля объекта

const userCopy = { ...user };
delete userCopy.name;

//===

const { name: _, ...userRest } = user;

// ===

const user5 = {
  ...user,
  name: undefined,
};

// === Добавление эллементов в массив
const posts = [
  { id: 1, title: 'React 1' },
  { id: 2, title: 'React 2' },
  { id: 3, title: 'React 3' },
  { id: 4, title: 'React 4' },
];

const posts2 = [{ id: 0, title: 'React 0' }, ...posts];
const posts3 = [...posts, { id: 5, title: 'React 5' }];
const posts4 = [...posts.slice(0, 3), { id: 5, title: 'React 5' }, ...posts.slice(3)];

// === Обновление элементов массива

const postsCopy = posts.slice();
postsCopy[3] = { ...postsCopy[3], title: 'React 4444' };

const posts5 = posts.map((post) => (post.id === 3 ? { ...post, title: 'React 3333' } : post));

// === Удаление элементов массива

const posts6 = posts.slice();
posts6.splice(2, 1);

const posts7 = posts.filter((post) => post.id !== 1);
