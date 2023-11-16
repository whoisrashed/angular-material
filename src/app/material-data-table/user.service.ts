import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { User } from "./user.model";
import { FAKE_USERS } from "./data";


@Injectable({
    providedIn:'root'
})
export class UserService {


    getUsers(orderBy?:string, direction?:string):Observable<User[]>{


       const data = FAKE_USERS;


       if(orderBy && direction){
          const sortedData = direction=='asc'? data.sort((a,b)=> a.name.localeCompare(b.name)): data.sort((a,b)=>b.name.localeCompare(a.name));
            return of(sortedData);
      
        }



        return of (FAKE_USERS);

    }
} 