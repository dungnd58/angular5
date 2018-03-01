import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppServices {    
    getData() {
        return this.mockdata;
    }

    constructor(private http: HttpClient) {}

    mockdata = {
        "colourGroups": [
            {
                "title": "white",
                "hexCode": "#fff",
                "id": 1
            }, {
                "title": "red",
                "hexCode": "#EE2D24",
                "id": 2
            }, {
                "title": "orange",
                "hexCode": "#F78E1F",
                "id": 3
            }, {
                "title": "yellow",
                "hexCode": "#FFC119",
                "id": 4
            }, {
                "title": "green",
                "hexCode": "#50B848",
                "id": 5
            }
        ],
        "colors": [
            {
                "id": 1,
                "title": "Arctic White",
                "value": "Arctic White",
                "colourGroupId": 1
            },
            {
                "id": 2,
                "title": "Alien Green",
                "value": "Alien Green",
                "colourGroupId": 5
            },
            {
                "id": 3,
                "title": "Apple Green",
                "value": "Apple Green",
                "colourGroupId": 5
            },
            {
                "id": 4,
                "title": "Burnt Orange",
                "value": "Burnt Orange",
                "colourGroupId": 3
            },
            {
                "id": 5,
                "title": "Bottle Green",
                "value": "Bottle Green",
                "colourGroupId": 5
            },
            {
                "id": 6,
                "title": "Brick Red",
                "value": "Brick Red",
                "colourGroupId": 2
            },
            {
                "id": 7,
                "title": "Lipstick Red",
                "value": "Lipstick Red",
                "colourGroupId": 2
            },
            {
                "id": 8,
                "title": "Milk White",
                "value": "Milk White",
                "colourGroupId": 1
            },
            {
                "id": 9,
                "title": "Tan Orange",
                "value": "Tan Orange",
                "colourGroupId": 3
            }
        ],
        "products": [
            {
                "colorId": 1,
                "colourGroupId": 1,
                "id": 1,
                "imageUrl": "../assets/img/sample.jpg",
                "status": "",
                "name": "Arctic White",
                "code": "WHITE-JH001WHITE"
            },
            {
                "colorId": 2,
                "colourGroupId": 5,
                "id": 2,
                "imageUrl": "../assets/img/sample.jpg",
                "status": "",
                "name": "Alien Green",
                "code": "GREEN-JH001GREEN"
            },
            {
                "colorId": 3,
                "colourGroupId": 5,
                "id": 3,
                "imageUrl": "../assets/img/sample.jpg",
                "status": "new color",
                "name": "Apple Green",
                "code": "GREEN-JH001GREEN"
            },
            {
                "colorId": 4,
                "colourGroupId": 3,
                "id": 4,
                "imageUrl": "../assets/img/sample.jpg",
                "status": "",
                "name": "Burnt Orange",
                "code": "ORANGE-JH001ORANGE"
            },
            {
                "colorId": 5,
                "colourGroupId": 5,
                "id": 5,
                "imageUrl": "../assets/img/sample.jpg",
                "status": "",
                "name": "Bottle Green",
                "code": "GREEN-JH001GREEN"
            },
            {
                "colorId": 6,
                "colourGroupId": 2,
                "id": 6,
                "imageUrl": "../assets/img/sample.jpg",
                "status": "raladeal",
                "name": "Brick Red",
                "code": "RED-JH001RED"
            },
            {
                "colorId": 7,
                "colourGroupId": 2,
                "id": 7,
                "imageUrl": "../assets/img/sample.jpg",
                "status": "",
                "name": "Lipstick Red",
                "code": "RED-JH001RED"
            },
            {
                "colorId": 8,
                "colourGroupId": 1,
                "id": 8,
                "imageUrl": "../assets/img/sample.jpg",
                "status": "new size",
                "name": "Milk White",
                "code": "WHITE-JH001WHITE"
            },
            {
                "colorId": 9,
                "colourGroupId": 3,
                "id": 9,
                "imageUrl": "../assets/img/sample.jpg",
                "status": "",
                "name": "Tan Orange",
                "code": "ORANGE-JH001ORANGE"
            }
        ]
    }
}