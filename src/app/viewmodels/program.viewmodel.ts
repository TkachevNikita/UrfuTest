import { Router } from "@angular/router";
import { ProgramModel } from "../models/program.model";

export class ProgramViewModel {
    constructor(private _model: ProgramModel, private _router: Router) {}

    public openDetails(): void {
        this._router.navigate([`programs/${this._model.id}`])
    }
}
