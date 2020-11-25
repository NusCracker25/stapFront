/* tslint:disable */

/**
 * (tsType: Omit<Modification, 'id'>, schemaOptions: { title: 'NewModification', exclude: [ 'id' ] })
 */
export interface NewModification {
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
