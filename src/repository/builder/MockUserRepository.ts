import { UserRepository } from '../UserRepository';

export class MockUserRepository implements UserRepository {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getUser(id: number): Promise<any> {
    return {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    };
  }
}
