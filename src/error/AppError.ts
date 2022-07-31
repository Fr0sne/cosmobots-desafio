export class AppError {
  constructor(private message: string, private statusCode: number) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
