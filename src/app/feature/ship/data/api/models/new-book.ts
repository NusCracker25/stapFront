/* tslint:disable */

/**
 * (tsType: Omit<Book, 'id'>, schemaOptions: { title: 'NewBook', exclude: [ 'id' ] })
 */
export interface NewBook {
  publication?: string;
  referenceId?: number;
  title: string;
  url?: string;
}
