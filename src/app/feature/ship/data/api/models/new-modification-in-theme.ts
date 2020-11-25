/* tslint:disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Modification, 'id'>, 'themeId'>, schemaOptions: { title: 'NewModificationInTheme', exclude: [ 'id' ], optional: [ 'themeId' ] })
 */
export interface NewModificationInTheme {
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
