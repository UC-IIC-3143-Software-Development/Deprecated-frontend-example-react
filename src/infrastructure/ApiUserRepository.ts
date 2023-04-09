import { UserRepository } from '../repository/UserRepository';

export type ApiUser = {
  id: number;
  name: string;
  email: string;
};

export class ApiUserRepository extends UserRepository {
  constructor(private apiUrl: string) {
    super();
  }

  async getUser(id: number): Promise<ApiUser> {
    const response = await fetch(`${this.apiUrl}/users/${id}`);
    return response.json();
  }
}
