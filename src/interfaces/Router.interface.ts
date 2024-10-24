import { Handler, Request, Response } from "../Types/main";

export interface IRouter {
  get(path: string, handler: Handler): void;
  post(path: string, handler: Handler): void;
  put(path: string, handler: Handler): void;
  del(path: string, handler: Handler): void;
  patch(path: string, handler: Handler): void;

  resolveRoute(req: Request, res: Response, path: string, method: string): void;
}
