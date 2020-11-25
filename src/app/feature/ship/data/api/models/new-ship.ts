/* tslint:disable */

/**
 * (tsType: Omit<Ship, 'id'>, schemaOptions: { title: 'NewShip', exclude: [ 'id' ] })
 */
export interface NewShip {
  construction?: string;
  heigth?: number;
  length?: number;
  name: string;
  order?: string;
  rank?: string;
  width?: number;
}
