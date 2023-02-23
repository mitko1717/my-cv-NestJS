import { CanActivate, ExecutionContext } from "@nestjs/common";

export class AdminGuard implements CanActivate {
// admin guard make sure that someone is admin to the application before
// allow access to make certain requests
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    if (!request.currentUser) {
      return false;
    }

    return request.currentUser.admin;
  }
}
