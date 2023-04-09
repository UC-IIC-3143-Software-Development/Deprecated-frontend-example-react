import { User } from '../domain/User';
import { UserRepository } from '../repository/UserRepository';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  async getUser(id: number): Promise<User> {
    const userDto = await this.userRepository.getUser(id);
    return new User(userDto.id, userDto.name, userDto.email);
  }
}
