/* tslint:disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Book, 'id'>, 'referenceId'>, schemaOptions: { title: 'NewBookInReference', exclude: [ 'id' ], optional: [ 'referenceId' ] })
 */
export interface NewBookInReference {
  publication?: string;
  referenceId?: number;
  title: string;
  url?: string;
}
