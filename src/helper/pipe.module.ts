import { NgModule } from '@angular/core';

//Pipes
import { StandardizePipe } from './pipe';

@NgModule({
    declarations: [StandardizePipe],
    exports: [StandardizePipe]
})
export class PipeModule { }
