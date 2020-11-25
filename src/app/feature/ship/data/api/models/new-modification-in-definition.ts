/* tslint:disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Modification, 'id'>, 'definitionId'>, schemaOptions: { title: 'NewModificationInDefinition', exclude: [ 'id' ], optional: [ 'definitionId' ] })
 */
export interface NewModificationInDefinition {
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
