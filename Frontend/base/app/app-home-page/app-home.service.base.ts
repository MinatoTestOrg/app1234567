import { Injectable,inject } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AppGlobalService } from '@baseapp/app-global.service';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class AppHomeBaseService {

  public appGlobalService = inject(AppGlobalService);
 
  

  config : any = [ {
  "expanded" : false,
  "folder" : true,
  "data" : {
    "properties" : { }
  },
  "children" : [ {
    "data" : {
      "id" : "683e0cf8-4bc3-433e-9d6d-5b020f815da5",
      "sysGen" : false,
      "defaultField" : false,
      "properties" : {
        "tileType" : "type_1"
      },
      "new" : false
    },
    "children" : [ {
      "data" : {
        "id" : "467ba4a4-e27e-44bf-a619-68058471972d",
        "sysGen" : false,
        "defaultField" : false,
        "properties" : {
          "label" : "Tile 1",
          "data" : "homeTile1",
          "field" : "homeTile",
          "class" : "home-tile"
        },
        "new" : false
      },
      "expanded" : false,
      "folder" : false,
      "key" : "homeTile",
      "title" : "Tile 1",
      "type" : "homeTile",
      "selected" : false
    }, {
      "data" : {
        "id" : "c126a65c-ba40-44b9-b5df-d509bb031c68",
        "sysGen" : false,
        "defaultField" : false,
        "properties" : {
          "label" : "Tile 2",
          "data" : "homeTile2",
          "field" : "homeTile",
          "class" : "home-tile"
        },
        "new" : false
      },
      "expanded" : false,
      "folder" : false,
      "key" : "homeTile",
      "title" : "Tile 2",
      "type" : "homeTile",
      "selected" : false
    }, {
      "data" : {
        "id" : "b090ce04-532c-4a34-88dd-ae686b1435ab",
        "sysGen" : false,
        "defaultField" : false,
        "properties" : {
          "label" : "Tile 3",
          "data" : "homeTile3",
          "field" : "homeTile",
          "class" : "home-tile"
        },
        "new" : false
      },
      "expanded" : false,
      "folder" : false,
      "key" : "homeTile",
      "title" : "Tile 3",
      "type" : "homeTile",
      "selected" : false
    }, {
      "data" : {
        "id" : "eef22075-6f7b-4a6c-ae5b-e1f8b990e99b",
        "sysGen" : false,
        "defaultField" : false,
        "properties" : {
          "label" : "Tile 4",
          "data" : "homeTile4",
          "field" : "homeTile",
          "class" : "home-tile"
        },
        "new" : false
      },
      "expanded" : false,
      "folder" : false,
      "key" : "homeTile",
      "title" : "Tile 4",
      "type" : "homeTile",
      "selected" : false
    }, {
      "data" : {
        "id" : "725f9cd4-efb2-420c-b34f-c595806345e3",
        "sysGen" : false,
        "defaultField" : false,
        "properties" : {
          "label" : "Tile 5",
          "data" : "homeTile5",
          "field" : "homeTile",
          "class" : "home-tile"
        },
        "new" : false
      },
      "expanded" : false,
      "folder" : false,
      "key" : "homeTile",
      "title" : "Tile 5",
      "type" : "homeTile",
      "selected" : false
    }, {
      "data" : {
        "id" : "821bffc3-8ee9-4ec3-a830-f288e1b602d3",
        "sysGen" : false,
        "defaultField" : false,
        "properties" : {
          "label" : "Tile 6",
          "data" : "homeTile6",
          "field" : "homeTile",
          "class" : "home-tile"
        },
        "new" : false
      },
      "expanded" : false,
      "folder" : false,
      "key" : "homeTile",
      "title" : "Tile 6",
      "type" : "homeTile",
      "selected" : false
    } ],
    "expanded" : false,
    "folder" : true,
    "key" : "homePage",
    "title" : "Home Page",
    "type" : "homePage",
    "selected" : false
  } ],
  "title" : "Page",
  "type" : "page",
  "key" : "page",
  "selected" : false
} ];
  
 currentUserRoles = (this.appGlobalService.getCurrentUserData()).userRoles;
 checkAccess: any = (o: string) => this.currentUserRoles.includes(o);

  public getLandingPageData() {
    let accessibleData: any = {
      children: []
    };
    const data: any = (this.config.find((t: { type: string; }) => t.type === "page"))?.children[0];
    if (!environment.prototype) {
      data.children?.filter((tileProps: any) => {
        const tile = tileProps.data?.properties;
        if (tile.accessControl && tile.accessControl.length > 0) {
          if (tile.accessControl.some(this.checkAccess))
            accessibleData.children.push(tileProps);
        }
        else {
          accessibleData.children.push(tileProps);
        }
      })
      accessibleData = { ...data, ...accessibleData };
    }
    else {

      accessibleData = data;
    }
    return accessibleData;
  }
}