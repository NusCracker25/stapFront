/* tslint:disable */
import { ModificationWithRelations } from './modification-with-relations';

/**
 * (tsType: ShipWithRelations, schemaOptions: { includeRelations: true })
 */
export interface ShipWithRelations {
  construction?: string;
  heigth?: number;
  id?: number;
  length?: number;
  modifications?: Array<ModificationWithRelations>;
  name: string;
  order?: string;
  rank?: string;
  width?: number;
}
