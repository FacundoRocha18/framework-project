import { IncomingMessage, ServerResponse } from "node:http";

export interface Request extends IncomingMessage {
  body?: any;
  params?: Params;
  query?: { [key: string]: string | string[] };
}
export type Response = ServerResponse;

export interface ParserParams {
  req: Request;
  res: Response;
  path: string;
  method: string;
  callback: (req: Request, res: Response, path: string, method: string) => void;
}

export type Params = { [key: string]: string };
export type Routes = { [path: string]: { [method: string]: Handler } };
export type Handler = (req: Request, res: Response) => void | Promise<void>;
export type Middleware = (
  req: Request,
  res: Response,
  next: () => void,
) => void | Promise<void>;
