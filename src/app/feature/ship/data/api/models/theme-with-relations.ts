/* tslint:disable */
import { ModificationWithRelations } from './modification-with-relations';

/**
 * (tsType: ThemeWithRelations, schemaOptions: { includeRelations: true })
 */
export interface ThemeWithRelations {
  id?: number;
  modifications?: Array<ModificationWithRelations>;
  name: string;
  termId?: number;
}
