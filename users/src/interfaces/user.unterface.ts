namespace User {
  /**
   * Need params
   *
   * @param {String} email - Email
   * @param {String} password - Password
   */
  export interface IUserCreateData {
    email: string;
    password: string;
    roles: string[];
  }

  export interface IResponseData {
    statusCode: number;
    message: string;
  }

  export type KindUser = 'Admin' | 'Guest';
}
