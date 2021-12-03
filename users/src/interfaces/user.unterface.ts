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

  export interface IUserResponseData {
    _id: string;
    id?: string;
    email: string;
    password: string;
    roles: string[];
  }

  export interface IUserUpdateData {
    password: string;
    roles?: string[];
  }

  export interface ISendUpdatedData {
    userId: string;
    data: IUserUpdateData;
  }

  export interface IResponseData {
    statusCode: number;
    message: string;
  }

  export type KindUser = 'Admin' | 'Guest';
}
