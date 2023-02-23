import { NestInterceptor, ExecutionContext, CallHandler, Injectable } from "@nestjs/common";
import { UsersService } from "../users.service";

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
    constructor(private usersService: UsersService) {}

    // this interceptor for intercept incoming request into application
    // we take a look at the request cookie in request.session
    // and use that cookie of session to figure out who the current user is

    async intercept(context: ExecutionContext, handler: CallHandler) {
        const request = context.switchToHttp().getRequest()
        const { userId } = request.session || {};

        if (userId) {
            // then fetch user and assign user to currentUser property
            const user = await this.usersService.findOne(userId)
            request.currentUser = user
        }

        return handler.handle()
    }
}