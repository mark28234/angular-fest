import { Effect, Actions, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as profileAction from "../actions/profile.actions";
import { map, switchMap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app-config';
import { Profile } from "../models/profile.model";

@Injectable()
export class ProfileEffects {

    constructor(private actions$: Actions, private http: HttpClient) { }

    @Effect()
    loadProfile$: Observable<any> = this.actions$.pipe(
        ofType(profileAction.LOAD_PROFILE),
        switchMap((action: profileAction.LoadProfile ) =>
            this.http.get<Profile>(AppConfig.API_END_POINT + "user/"+ action.id ).pipe(
                map((profile) => new profileAction.LoadProfileSuccess(profile)),
                catchError(err => null)
            )
        )
    );
}