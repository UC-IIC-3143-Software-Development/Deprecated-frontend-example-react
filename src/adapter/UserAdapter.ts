import { User } from '../domain/User';
import { ApiUser } from '../infrastructure/ApiUserRepository';

export class UserAdapter {
  static toDomain(apiUser: ApiUser): User {
    return new User(apiUser.id, apiUser.name, apiUser.email);
  }
}
