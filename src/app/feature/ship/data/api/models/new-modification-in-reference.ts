/* tslint:disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Modification, 'id'>, 'referenceId'>, schemaOptions: { title: 'NewModificationInReference', exclude: [ 'id' ], optional: [ 'referenceId' ] })
 */
export interface NewModificationInReference {
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
