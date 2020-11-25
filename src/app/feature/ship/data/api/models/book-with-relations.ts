/* tslint:disable */
import { ModificationWithRelations } from './modification-with-relations';
import { PeopleWithRelations } from './people-with-relations';

/**
 * (tsType: BookWithRelations, schemaOptions: { includeRelations: true })
 */
export interface BookWithRelations {
  authors?: Array<PeopleWithRelations>;
  id?: number;
  modifications?: Array<ModificationWithRelations>;
  publication?: string;
  referenceId?: number;
  title: string;
  url?: string;
}
