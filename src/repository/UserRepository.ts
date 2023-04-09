import { ApiUser } from '../infrastructure/ApiUserRepository';

export abstract class UserRepository {
  abstract getUser(id: number): Promise<ApiUser>;
}
