import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PRIMENG_IMPORTS } from './shared-primeng';
import { FORM_IMPORTS } from './form.imports';
import { Type } from '@angular/core';

export const SHARED_IMPORTS: Type<any>[] = [
  CommonModule,
  RouterModule,
  ...PRIMENG_IMPORTS,
  ...FORM_IMPORTS,
];
