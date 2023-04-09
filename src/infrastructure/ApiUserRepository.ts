import { UserRepository } from '../repository/UserRepository';

export class ApiUserRepository implements UserRepository {
  constructor(private apiUrl: string) {}

  async getUser(id: number): Promise<any> {
    const response = await fetch(`${this.apiUrl}/users/${id}`);
    return response.json();
  }
}
