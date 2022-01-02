export const getAllUser = () => {
  const list = [];

  let user1 = { id: 1, username: "rohit" };
  let user2 = { id: 2, username: "rahul" };

  list.push(user1, user2);

  return list;
};
