/* tslint:disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<People, 'id'>, 'bookId'>, schemaOptions: { title: 'NewPeopleInBook', exclude: [ 'id' ], optional: [ 'bookId' ] })
 */
export interface NewPeopleInBook {
  birth?: string;
  bookId?: number;
  death?: string;
  first_name: string;
  last_name: string;

  [key: string]: any;
}
