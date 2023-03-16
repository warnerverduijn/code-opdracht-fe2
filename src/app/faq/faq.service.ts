import { VraagData } from "./vraagdata.interface";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, map } from "rxjs";

@Injectable()
export class FaqService {

    apiURL = 'https://dummyjson.com/products';

    constructor(private http: HttpClient) { }

    getVragen$(): Observable<VraagData[]> {
        return this.http.get<VraagData[]>(this.apiURL).pipe(
            map((response: any[]) => {
                return Object.values(response)[0]
            })
        )
    }
}