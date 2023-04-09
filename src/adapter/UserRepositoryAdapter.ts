import { UserRepository } from '../repository/UserRepository';

export class UserRepositoryAdapter extends UserRepository {
  constructor(private userRepository: any) {
    super();
    this.userRepository = userRepository;
  }

  // @ts-ignore
  async getUser(id: number) {
    const userDto = await this.userRepository.getUser(id);
    return {
      id: userDto.id,
      name: userDto.name,
      email: userDto.email,
    };
  }
}
