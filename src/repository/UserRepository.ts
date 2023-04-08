export interface UserRepository {
    getUser(id: number): Promise<any>;
}