import * as fs from 'fs'
import { join } from 'path'
import { Global, Injectable } from '@nestjs/common'
import { UserCreateRequest, UserId, UserUpdateRequest } from './interfaces'

@Global()
@Injectable()
export class UserService {
  createUser(payload: UserCreateRequest) {
    const users: any = JSON.parse(
      fs.readFileSync(
        join(process.cwd(), './src/modules/users/data/data.json'),
        'utf-8',
      ),
    );
    let obj = users.find((u) => u.email == payload.email);
    if (obj) {
      return { message: 'User already exists' };
    }
    let newUser = {
      id: users.length + 1,
      ...payload,
    };
    users.push(newUser);
    console.log(users);

    fs.writeFileSync(
      './src/modules/users/data/data.json',
      JSON.stringify(users, null, 4),
    );
    return { message: 'User created' };
  }

  getUser() {
    const users: any = JSON.parse(
      fs.readFileSync(
        join(process.cwd(), './src/modules/users/data/data.json'),
        'utf-8',
      ),
    );

    return { data: users };
  }

  deleteUser(id: UserId) {
    const users: any = JSON.parse(
      fs.readFileSync(
        join(process.cwd(), './src/modules/users/data/data.json'),
        'utf-8',
      ),
    )

    let obj = users.find((u) => u.id == +id.id)

    if (!obj) {
      return { message: 'User not found' }
    }
    users.splice(obj.id-1, 1)
    fs.writeFileSync('./src/modules/users/data/data.json',JSON.stringify(users, null, 4))
    return { message: 'User deleted' } 
  }

  updateUser(id: UserId,payload:UserUpdateRequest){
    const users: any = JSON.parse(
      fs.readFileSync(
        join(process.cwd(), './src/modules/users/data/data.json'),
        'utf-8',
      ),
    )
    let obj = users.find((u) => u.id == id.id);
    if (!obj) {
      return { message: 'User not found' };
    }
    let {username,password,email,gender} =payload
    obj.username = username ? username : obj.username;
    obj.password = password ? password : obj.password;
    obj.email = email ? email : obj.email;
    obj.gender = gender ? gender: obj.gender;
    users[id.id-1]={
      id: id.id-1,
      ...obj
    }
    fs.writeFileSync(
      './src/modules/users/data/data.json',
      JSON.stringify(users, null, 4),
    )   
        return { message: 'User updated' };
  }

}
