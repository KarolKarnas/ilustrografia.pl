import { Request, Response, NextFunction } from 'express';

const notFound = (req: Request, res: Response, next: NextFunction) => {
	const error = new Error(`Not Found - ${req.originalUrl}`);
	res.status(404);
	next(error);
};

const errorHandler = (
	err: Error,
	_req: Request,
	res: Response,
	_next: NextFunction
) => {
	const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
	const message = err.message;

	res.status(statusCode).json({
		message: message,
		stack: process.env.NODE_ENV === 'production' ? null : err.stack,
	});
};

export { notFound, errorHandler };
