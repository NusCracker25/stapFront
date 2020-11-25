/* tslint:disable */
import { ModificationWithRelations } from './modification-with-relations';

/**
 * (tsType: PeopleWithRelations, schemaOptions: { includeRelations: true })
 */
export interface PeopleWithRelations {
  birth?: string;
  bookId?: number;
  death?: string;
  first_name: string;
  id?: number;
  last_name: string;
  modifications?: Array<ModificationWithRelations>;

  [key: string]: any;
}
