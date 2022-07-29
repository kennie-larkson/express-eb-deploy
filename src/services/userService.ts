import { NextFunction, Request, Response } from "express";
import { UserEntity } from "../entities/User";
import { AppDataSource } from "../utils/data-source";

export default class UserService {
  private userRepository = AppDataSource.getRepository(UserEntity);

  async getAllUsers(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.find();
  }

  async findUserById(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.find({
      where: { id: parseInt(request.params.id) },
    });
  }

  async createUser(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.save(request.body);
  }

  async removeUser(request: Request, response: Response, next: NextFunction) {
    let userToRemove = await this.userRepository.find({
      where: { id: parseInt(request.params.id) },
    });
    await this.userRepository.remove(userToRemove);
  }
}
