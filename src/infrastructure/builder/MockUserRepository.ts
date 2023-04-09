import { UserRepository } from '../../repository/UserRepository';
import { ApiUser } from '../ApiUserRepository';

export class MockUserRepository implements UserRepository {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getUser(id: number): Promise<ApiUser> {
    return {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    };
  }
}
