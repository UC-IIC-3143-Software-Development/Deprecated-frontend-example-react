import { UserAdapter } from './UserAdapter';
import { User } from '../domain/User';
import { ApiUser } from '../infrastructure/ApiUserRepository';

describe('UserAdapter', () => {
  it('should convert ApiUser to User', () => {
    const apiUser: ApiUser = {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    };

    const user = UserAdapter.toDomain(apiUser);

    expect(user).toBeInstanceOf(User);
    expect(user.id).toEqual(apiUser.id);
    expect(user.name).toEqual(apiUser.name);
    expect(user.email).toEqual(apiUser.email);
  });
});
