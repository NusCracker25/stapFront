/* tslint:disable */

/**
 * (tsType: Partial<People>, schemaOptions: { partial: true })
 */
export interface PeoplePartial {
  birth?: string;
  bookId?: number;
  death?: string;
  first_name?: string;
  id?: number;
  last_name?: string;

  [key: string]: any;
}
