namespace User {
  /**
   * Need params
   *
   * @param {String} email - Email
   * @param {String} password - Password
   */
  export interface IUser {
    email: string;
    password: string;
    roles: string[];
  }

  export type KindUser = 'Admin' | 'Guest';
}
