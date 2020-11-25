/* tslint:disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Theme, 'id'>, 'termId'>, schemaOptions: { title: 'NewThemeInTerm', exclude: [ 'id' ], optional: [ 'termId' ] })
 */
export interface NewThemeInTerm {
  name: string;
  termId?: number;
}
