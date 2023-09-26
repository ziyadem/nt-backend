import { Gender } from '../enums';

export declare interface UserUpdateRequest {
  username?: string;
  password?: string;
  gender?: Gender;
  email?: string;
}
