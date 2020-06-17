
import { Time } from '@angular/common';

export class Map {
    type: string;
    coordinates: number[];
}

export interface Position {
    latitude: number;
    longitude: number;
}

export class PositionI {
    position: Position;
    constructor( long: number, lat: number) {
       this.position = {longitude: long, latitude: lat};
    }
}

export class RouteCl {
    position: Position;
    name: string;
    timestamp: Time;
    //     ///             /// DATATYPE NOT FINAL! --> Maybe Firestore Timestamp to rxjs Timestamp conversion? | Feature Discussion
    constructor( long: number, lat: number, name: string) {
        this.position = {longitude: long, latitude: lat};
        this.name = name;
        // this.timestamp = timestamp;
     }
}


export interface AssemblyPoint {
    position: Position;
    name: string;
    maxMember: number;
    potMemberCount: number;
}

export interface Cluster {
    geoCluster: GeoCluster;
    bearing: number;
    name: string;
    memberCount: number;
    // memberList: any;        // Need in for interface for Members <- Datatype for Members
}


export class User {
    private position: Position;
    private name: string;
    constructor(name: string, longitude: number, latitude: number) {
        this.position = {longitude, latitude};
        this.name = name;
    }
}

export class AssemblyPoint {
    private assemblyPoint: AssemblyPoint;
    constructor(name: string, longitude: number , latitude: number, maxMember: number, potMemberCount: number) {
        this.assemblyPoint.position = {longitude, latitude};
        this.assemblyPoint.maxMember = maxMember;
        this.assemblyPoint.name = name;
        this.assemblyPoint.potMemberCount = potMemberCount;
    }
}

export interface IGeometry {
    type: string;
    coordinates: [number,number];
}

export interface IGeoJsonCluster {
    type: string;
    geometry: IGeometry;
    properties?: Array<string>;
    members?: Array<string>;
}

export interface IGeoJsonAssemblyPoint {
    type: string;
    geometry: IGeometry;
    properties?: Array<any>;
    available?: String;
    
}
export interface IGeoPointMarker {
  type: string;
  geometry: IGeometry;
  properties?: Array<any>;

}


export class GeoCluster implements IGeoJsonCluster {
    //Variable Definition for Cluster
  type = 'Feature';
  geometry: IGeometry;
  properties;
  direction;

  constructor(coordinates,properties? ) {
    this.geometry = {
      type: 'Point',
      // coordinates: coordinates
      coordinates,
    };
    properties = properties;
  }
}


export class GeoAssemblyPoint implements IGeoJsonAssemblyPoint {
    type = 'Feature';
    geometry: IGeometry;
    properties;



    constructor(coordinates,textField,iconName, properties?,available?) {
      this.geometry = {type: 'Point',coordinates,};
      var obj=[];
      available.forEach(x=>{
          for(let i=0;i<x.length;i++){    
           obj.push(x[i]);
        }


      switch(obj.length){
        case 0: {
          this.properties={title:properties[0],latitude:coordinates[0],longitude:coordinates[1],available_count:0,textField:textField,iconName:iconName};
          break;
        }
        case 1: {
          this.properties={title:properties[0],latitude:coordinates[0],longitude:coordinates[1],available_1:obj[0],available_count:1,textField:textField,iconName:iconName};
          break;
        }
        case 2: {
          this.properties={title:properties[0],latitude:coordinates[0],longitude:coordinates[1],available_1:obj[0],available_2:obj[1],available_count:2,textField:textField,iconName:iconName};
          break;
        }
        case 3: {
          this.properties={title:properties[0],latitude:coordinates[0],longitude:coordinates[1],available_1:obj[0],available_2:obj[1],available_3:obj[2],available_count:3,textField:textField,iconName:iconName};
          break;
        }
        case 4: {
          this.properties={title:properties[0],latitude:coordinates[0],longitude:coordinates[1],available_1:obj[0],available_2:obj[1],available_3:obj[2],available_4:obj[3],available_count:4,textField:textField,iconName:iconName};
          break;
        }
        case 5: {
          this.properties={title:properties[0],latitude:coordinates[0],longitude:coordinates[1],available_1:obj[0],available_2:obj[1],available_3:obj[2],available_4:obj[3],available_5:obj[4],available_count:5,textField:textField,iconName:iconName};
          break;
        }
        case 6: {
          this.properties={title:properties[0],latitude:coordinates[0],longitude:coordinates[1],available_1:obj[0],available_2:obj[1],available_3:obj[2],available_4:obj[3],available_5:obj[4],available_6:obj[5],available_count:6,textField:textField,iconName:iconName};
          break;
        }
        default: {
          this.properties={title:properties[0],latitude:coordinates[0],longitude:coordinates[1],textField:textField,iconName:iconName};
          break;
        }
      }     
      })
    
    }
  }
  export class GeoPointMarker implements IGeoPointMarker {
    type = 'Feature';
    geometry: IGeometry;
    properties;


    constructor(coordinates, properties? ) {
      this.geometry = {
        type: 'Point',
        coordinates,
      };

      this.properties = {};


    }
  }

export class ClusterCollection {
  type = 'FeatureCollection';
  constructor(public features: Array<GeoCluster>) {}
}

export class AssemblyPointCollection {
    type = 'FeatureCollection';
    constructor(public features: Array<GeoAssemblyPoint>) {}
}
export class PointMarker {
  type = 'FeatureCollection';
  constructor(public features: Array<GeoPointMarker>) {}
}

export class RoutingGeoAssemblyPoint {
  position: Position;
  name: string;
  available: Array<String>;
  textField:String="";
  iconName:String="";
  constructor(longitude: number, latitude: number, name: string,available:Array<String>,textField:String,iconName:String){
    this.position = {
      longitude, latitude
    },
    this.name = name;
    this.available=available;
    this.textField=textField;
    this.iconName=iconName;
  }

}

