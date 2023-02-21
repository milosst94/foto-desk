import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "./entity/user.entiy";

export const getUsers = createParamDecorator(
    (data: User, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        return request.user
    }
);