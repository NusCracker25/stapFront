/* tslint:disable */
import { BookWithRelations } from './book-with-relations';
import { ModificationWithRelations } from './modification-with-relations';

/**
 * (tsType: ReferenceWithRelations, schemaOptions: { includeRelations: true })
 */
export interface ReferenceWithRelations {
  book?: BookWithRelations;
  definitionId?: number;
  id?: number;
  modifications?: Array<ModificationWithRelations>;
  page?: number;
}
