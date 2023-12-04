import authConfig from "./auth.config";

export const jwtConstants = { secret: authConfig().mySecret }