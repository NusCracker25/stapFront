/* tslint:disable */
import { ModificationWithRelations } from './modification-with-relations';
import { ReferenceWithRelations } from './reference-with-relations';

/**
 * (tsType: DefinitionWithRelations, schemaOptions: { includeRelations: true })
 */
export interface DefinitionWithRelations {
  id?: number;
  modifications?: Array<ModificationWithRelations>;
  reference?: ReferenceWithRelations;
  termId?: number;
  text: string;
}
