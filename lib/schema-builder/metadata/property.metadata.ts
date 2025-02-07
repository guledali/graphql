import { GqlTypeReference } from '../../interfaces';
import { TypeOptions } from '../../interfaces/type-options.interface';
import { DirectiveMetadata } from './directive.metadata';
import { MethodArgsMetadata } from './param.metadata';

export interface PropertyMetadata {
  schemaName: string;
  name: string;
  typeFn: () => GqlTypeReference;
  target: Function;
  options: TypeOptions;
  description?: string;
  deprecationReason?: string;
  methodArgs?: MethodArgsMetadata[];
  directives?: DirectiveMetadata[];
}
