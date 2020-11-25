/* tslint:disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Modification, 'id'>, 'shipId'>, schemaOptions: { title: 'NewModificationInShip', exclude: [ 'id' ], optional: [ 'shipId' ] })
 */
export interface NewModificationInShip {
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
