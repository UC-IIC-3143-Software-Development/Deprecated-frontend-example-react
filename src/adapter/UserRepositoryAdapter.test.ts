import { UserRepositoryAdapter } from './UserRepositoryAdapter';
import { MockUserRepository } from '../repository/builder/MockUserRepository';

describe('UserRepositoryAdapter', () => {
  it('should fetch a user from the API and return a user DTO', async () => {
    const apiUserRepository = new MockUserRepository();
    const userRepositoryAdapter = new UserRepositoryAdapter(apiUserRepository);
    const userDto = await userRepositoryAdapter.getUser(1);

    expect(userDto).toEqual({
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    });
  });
});
