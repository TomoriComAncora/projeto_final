export class CustomAPIError extends Error {
  constructor(message: string | undefined, statusCode: any) {
    super(message);
  }
}

export const createCustomError = (message: any, statusCode: any) => {
  return new CustomAPIError(message, statusCode);
};

