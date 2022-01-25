class CustomError extends Error {
  constructor(message, name, httpCode) {
    super();
    this.message = message;
    this.data = {
      message,
      name: name || 'none',
      httpCode: httpCode || 500,
    };
    this.status = httpCode || 500;
    this.stack = new Error(message).stack;
  }
}

const ERR = {
  DEFAULT: new CustomError('Error Occured', 'none', 500),
  AUTH_FAIL: new CustomError('Authentication failed. Please try again.', 'auth_fail', 401),
  DATE_FUTURE: new CustomError('Date is in future', 'date_future', 400),
  INVALID_PAYLOAD: new CustomError('Specified field does not contain payload field', 400),
  ROLES_NOEXISTS: new CustomError('Role(s) does not exists.', 'roles_noexists', 400),
  TOKEN_REQ: new CustomError('Must send access_token', 'token_req', 500),
  TOKEN_EXP: new CustomError('Token Expired...', 'token_exp', 500),
  UNAUTHORIZED: new CustomError('Unauthorized access', 'unauthorized', 401),
  APP_SECRET32: new CustomError('App Secret Missing', 'app_secret32', 500),
};

const throwError = (err) => {
  throw err;
};

module.exports = {
  Error,
  ERR,
  throwError,
};
