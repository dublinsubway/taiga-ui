import {ChangeDetectorRef, Provider, SkipSelf} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {watchedControllerFactory} from '@taiga-ui/core';

import {TuiTableDirective} from '../directives/table.directive';

// TODO: remove in ivy compilation
export const TABLE_FACTORY = watchedControllerFactory;

export const TUI_TABLE_PROVIDER: Provider[] = [
    TuiDestroyService,
    {
        provide: TuiTableDirective,
        deps: [[new SkipSelf(), TuiTableDirective], ChangeDetectorRef, TuiDestroyService],
        useFactory: TABLE_FACTORY,
    },
];
