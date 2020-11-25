/* tslint:disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Modification, 'id'>, 'termId'>, schemaOptions: { title: 'NewModificationInTerm', exclude: [ 'id' ], optional: [ 'termId' ] })
 */
export interface NewModificationInTerm {
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
