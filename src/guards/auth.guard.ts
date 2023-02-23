import { CanActivate, ExecutionContext } from "@nestjs/common";

export class AuthGuard implements CanActivate {
    // auth guard make sure that someone is signed in to the application before
    // allow access to make certain requests
    canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest()

        return request.session.userId
    }
}