/* tslint:disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Modification, 'id'>, 'bookId'>, schemaOptions: { title: 'NewModificationInBook', exclude: [ 'id' ], optional: [ 'bookId' ] })
 */
export interface NewModificationInBook {
  bookId?: number;
  definitionId?: number;
  field: string;
  new_value: string;
  peopleId?: number;
  referenceId?: number;
  shipId?: number;
  termId?: number;
  themeId?: number;
}
