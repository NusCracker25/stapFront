/* tslint:disable */
import { DefinitionWithRelations } from './definition-with-relations';
import { ModificationWithRelations } from './modification-with-relations';
import { ThemeWithRelations } from './theme-with-relations';

/**
 * (tsType: TermWithRelations, schemaOptions: { includeRelations: true })
 */
export interface TermWithRelations {
  definitions?: Array<DefinitionWithRelations>;
  id?: number;
  modifications?: Array<ModificationWithRelations>;
  term: string;
  themes?: Array<ThemeWithRelations>;
}
