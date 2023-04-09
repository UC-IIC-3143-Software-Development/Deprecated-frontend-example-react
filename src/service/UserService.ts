import { UserRepository } from '../repository/UserRepository';
import { GetUserQuery } from './query/GetUserQuery';

export class UserService {
  private getUserQuery: GetUserQuery;

  constructor(userRepository: UserRepository) {
    this.getUserQuery = new GetUserQuery(userRepository);
  }

  async getUser(id: number) {
    return this.getUserQuery.execute(id);
  }
}
