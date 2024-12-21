import { ApexException } from "@exceptions";

export class DatabaseInitializationException extends ApexException {
	public status: number;
	public stack: string | undefined;

	constructor(message: string, status: number, stack?: string) {
		super(message, status, stack);
	}
}