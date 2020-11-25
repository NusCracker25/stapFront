/* tslint:disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Modification, 'id'>, 'peopleId'>, schemaOptions: { title: 'NewModificationInPeople', exclude: [ 'id' ], optional: [ 'peopleId' ] })
 */
export interface NewModificationInPeople {
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
