import { NextFunction, Request, Response } from "express";
// import { UserEntity } from "../entities/User";
// import { AppDataSource } from "../utils/data-source";
import UserService from "../services/userService";

export class UserController {
  //private userRepository = AppDataSource.getRepository(UserEntity);
  private userService: UserService;

  async all(request: Request, response: Response, next: NextFunction) {
    return this.userService.getAllUsers(request, response, next);
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.userService.findUserById(request, response, next);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.userService.createUser(request, response, next);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    return this.userService.removeUser(request, response, next);
  }
}
