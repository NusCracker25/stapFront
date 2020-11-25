/* tslint:disable */

/**
 * (tsType: Omit<People, 'id'>, schemaOptions: { title: 'NewPeople', exclude: [ 'id' ] })
 */
export interface NewPeople {
  birth?: string;
  bookId?: number;
  death?: string;
  first_name: string;
  last_name: string;

  [key: string]: any;
}
