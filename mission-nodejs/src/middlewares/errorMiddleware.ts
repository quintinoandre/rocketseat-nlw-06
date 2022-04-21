import { Request, Response, NextFunction } from "express";

function errorMiddleware(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (err instanceof Error)
    return response.status(400).json({ error: err.message });

  return response
    .status(500)
    .json({ status: "error", error: "Internal server error" });
}

export { errorMiddleware };
