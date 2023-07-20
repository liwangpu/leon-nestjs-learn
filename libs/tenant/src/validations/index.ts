import { TenantEmailExistsRule, TenantExistsRule } from './tenant.validation';

export { TenantExists, TenantEmailExists } from './tenant.validation';

export const ValidationRules = [
  TenantExistsRule,
  TenantEmailExistsRule,
];