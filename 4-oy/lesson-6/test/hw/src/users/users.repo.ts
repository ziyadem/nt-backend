let users=[
    {
        id:1,
        name:"John",
        surname:"John",
        age:20,
        email:"kenaa@example.com",
        password:"123456"
    },
    {
        id:2,
        name:"John",
        surname:"John",
        age:20,
        email:"kenaa@example.com",
        password:"123456"
    },
    {
        id:3,
        name:"John",
        surname:"John",
        age:20,
        email:"kenaa@example.com",
        password:"123456"
    },
    {
        id:4,
        name:"John",
        surname:"John",
        age:20,
        email:"kenaa@example.com",
        password:"123456"
    },
]

export class UsersRepository {
  getUsers() {
    return users;
  }
  getOne(user_id) {
    return users.find((c) => c.id === +user_id);
  }

  createUser(user) {
    users.push({
      ...user,
      id: users.length + 1,
    });
    return {
      ...user,
      id: users.length + 1,
    };
  }

  deleteUser(user_id) {
    users.forEach((c, idx) => {
      if (c.id == user_id) {
        users.splice(idx, 1);
      }
    });
    return {
      user_id,
    };
  }

  updateUser(user_id, updateUser) {
    let { name, surname,age,password,email } = updateUser;
    users.forEach((c, idx) => {
      if (c.id == user_id) {
        c.name = name ? name : c.name;
        c.surname = surname ? surname : c.surname;
        c.age = age ? age : c.age;
        c.password = password ? password : c.password;
        c.email = email ? email : c.email;
      }
    });

    return {
      user_id,
    };
  }
}