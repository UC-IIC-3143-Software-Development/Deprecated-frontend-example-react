import { UserService } from './UserService';
import { User } from '../domain/User';
import { MockUserRepository } from '../repository/builder/MockUserRepository';

describe('UserService', () => {
  it('should fetch a user and return a User instance', async () => {
    const userRepository = new MockUserRepository();
    const userService = new UserService(userRepository);
    const user = await userService.getUser(1);

    expect(user).toBeInstanceOf(User);
    expect(user.id).toEqual(1);
    expect(user.name).toEqual('John Doe');
    expect(user.email).toEqual('john.doe@example.com');
  });
});
