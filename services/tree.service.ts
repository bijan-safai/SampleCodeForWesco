import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

/*
* Tree factory creates a list of "saplings". Saplings are a buffer between Tree Objects
* and JSON data. This list is then sent to the component for instantiation
*/

@Injectable()
export class TreeFactory
{
    saplings : sapling[];

    constructor(private http: Http)
    { 
        //When the database is up this is is the format of the HTTP request 
        //to pull the data from the database

        /*this.http.get('<URL_HERE>').subscribe(saplings => {
            this.saplings = saplings['saplings']
        });*/

        //This is the format of the saplings list after being parsed from the JSON
        this.saplings =
        [ 
            {
                lat : 1,
                long : 1,
                decs : ["fl","fw","fr"],
                special : ["wild"],
                hidden : false
            },
            {
                lat : 10,
                long : 14,
                decs : ["fl"],
                special : [],
                hidden : true
            },
            {
                lat : 1,
                long : 1,
                decs : ["fw","pn"],
                special : ["fire"],
                hidden : false
            }
        ]
        
    }

    //Returns the sapling list to the TreeComponent
    getTrees() : sapling[]
    {
        return this.saplings;
    }
}
//interface serves as a buffer between raw JSON and Tree objects
interface sapling
{
    lat : number,
    long : number,
    decs : string[],
    special : string[],
    hidden : boolean
}



