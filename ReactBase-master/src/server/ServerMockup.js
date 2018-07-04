const fetch = require('node-fetch')

const url = "http://127.0.0.1:8000/api";

module.exports = function (){
    return fetch(url).then(resp => resp.json())
}

/*
module.exports = function () {
    return new Promise ( success => {
    setTimeout( () => {
        success(
            [{
                "id": 1,
                "name": "Linea 1",
                "created_at": "2018-06-06 19:46:52",
                "updated_at": "2018-06-06 19:46:52",
                "stops": [{
                    "id": 1,
                    "branch_id": 1,
                    "name": "Parada 1",
                    "latitude": -34.55340417647346,
                    "longitude": -58.46477349435128,
                    "created_at": "2018-06-06 19:47:29",
                    "updated_at": "2018-06-06 19:47:29"
                }, {
                    "id": 2,
                    "branch_id": 1,
                    "name": "Parada 2",
                    "latitude": -34.55943897379596,
                    "longitude": -58.45910940825894,
                    "created_at": "2018-06-06 19:47:43",
                    "updated_at": "2018-06-06 19:47:43"
                }, {
                    "id": 3,
                    "branch_id": 1,
                    "name": "Parada 3",
                    "latitude": -34.565215398491006,
                    "longitude": -58.4540791281737,
                    "created_at": "2018-06-06 19:47:50",
                    "updated_at": "2018-06-06 19:50:45"
                }, {
                    "id": 4,
                    "branch_id": 1,
                    "name": "Parada 4",
                    "latitude": -34.56837981871168,
                    "longitude": -58.44845933522237,
                    "created_at": "2018-06-06 19:51:05",
                    "updated_at": "2018-06-06 19:51:05"
                }, {
                    "id": 5,
                    "branch_id": 1,
                    "name": "Parada 5",
                    "latitude": -34.57097739754462,
                    "longitude": -58.44301614058486,
                    "created_at": "2018-06-06 19:51:18",
                    "updated_at": "2018-06-06 19:51:18"
                }, {
                    "id": 6,
                    "branch_id": 1,
                    "name": "Parada 6",
                    "latitude": -34.57276781863988,
                    "longitude": -58.43982752086515,
                    "created_at": "2018-06-06 19:51:26",
                    "updated_at": "2018-06-06 19:51:26"
                }, {
                    "id": 7,
                    "branch_id": 1,
                    "name": "Parada 7",
                    "latitude": -34.5762807257762,
                    "longitude": -58.432555963239565,
                    "created_at": "2018-06-06 19:51:36",
                    "updated_at": "2018-06-06 19:51:48"
                }, {
                    "id": 8,
                    "branch_id": 1,
                    "name": "Parada 8",
                    "latitude": -34.57857368029197,
                    "longitude": -58.425582150336425,
                    "created_at": "2018-06-06 19:52:30",
                    "updated_at": "2018-06-06 19:52:30"
                }, {
                    "id": 9,
                    "branch_id": 1,
                    "name": "Parada 9",
                    "latitude": -34.57939053274956,
                    "longitude": -58.419213336454504,
                    "created_at": "2018-06-06 19:52:49",
                    "updated_at": "2018-06-06 19:52:49"
                }]
            },
            {
                "id": 2,
                "name": "Linea 2",
                "created_at": "2018-06-06 19:46:57",
                "updated_at": "2018-06-06 19:46:57",
                "stops": [{
                    "id": 10,
                    "branch_id": 2,
                    "name": "Parada 1",
                    "latitude": -34.56971342172991,
                    "longitude": -58.42638976655405,
                    "created_at": "2018-06-06 19:53:33",
                    "updated_at": "2018-06-06 19:53:39"
                }, {
                    "id": 11,
                    "branch_id": 2,
                    "name": "Parada 2",
                    "latitude": -34.57412844903074,
                    "longitude": -58.424806879889616,
                    "created_at": "2018-06-06 19:53:55",
                    "updated_at": "2018-06-06 19:54:10"
                }, {
                    "id": 12,
                    "branch_id": 2,
                    "name": "Parada 3",
                    "latitude": -34.57904752792629,
                    "longitude": -58.427410513155564,
                    "created_at": "2018-06-06 19:54:01",
                    "updated_at": "2018-06-06 19:54:23"
                }, {
                    "id": 14,
                    "branch_id": 2,
                    "name": "Parada 4",
                    "latitude": -34.58121971315523,
                    "longitude": -58.42934904235841,
                    "created_at": "2018-06-06 19:56:07",
                    "updated_at": "2018-06-06 19:56:07"
                }, {
                    "id": 15,
                    "branch_id": 2,
                    "name": "Parada 5",
                    "latitude": -34.583576993241856,
                    "longitude": -58.43243397888182,
                    "created_at": "2018-06-06 19:56:17",
                    "updated_at": "2018-06-06 19:56:17"
                }, {
                    "id": 16,
                    "branch_id": 2,
                    "name": "Parada 6",
                    "latitude": -34.59007687704134,
                    "longitude": -58.438741828005504,
                    "created_at": "2018-06-06 19:56:25",
                    "updated_at": "2018-06-06 19:56:47"
                }, {
                    "id": 17,
                    "branch_id": 2,
                    "name": "Parada 7",
                    "latitude": -34.59331438098243,
                    "longitude": -58.442343820190445,
                    "created_at": "2018-06-06 19:56:31",
                    "updated_at": "2018-06-06 19:56:38"
                }]
            },
            {
                "id": 3,
                "name": "Linea 3",
                "created_at": "2018-06-06 19:47:01",
                "updated_at": "2018-06-06 19:47:01",
                "stops": [{
                    "id": 18,
                    "branch_id": 3,
                    "name": "Parada 1",
                    "latitude": -34.59804165029193,
                    "longitude": -58.40616355154202,
                    "created_at": "2018-06-06 19:57:16",
                    "updated_at": "2018-06-06 19:57:19"
                }, {
                    "id": 19,
                    "branch_id": 3,
                    "name": "Parada 2",
                    "latitude": -34.59776222885364,
                    "longitude": -58.422006477406796,
                    "created_at": "2018-06-06 19:57:38",
                    "updated_at": "2018-06-06 19:57:38"
                }, {
                    "id": 20,
                    "branch_id": 3,
                    "name": "Parada 3",
                    "latitude": -34.596148678034986,
                    "longitude": -58.42711166930701,
                    "created_at": "2018-06-06 19:57:47",
                    "updated_at": "2018-06-06 19:57:47"
                }, {
                    "id": 21,
                    "branch_id": 3,
                    "name": "Parada 4",
                    "latitude": -34.59338298594359,
                    "longitude": -58.43155939236624,
                    "created_at": "2018-06-06 19:57:53",
                    "updated_at": "2018-06-06 19:57:53"
                }, {
                    "id": 22,
                    "branch_id": 3,
                    "name": "Parada 5",
                    "latitude": -34.5895325783807,
                    "longitude": -58.4375081747437,
                    "created_at": "2018-06-06 19:58:00",
                    "updated_at": "2018-06-06 19:58:00"
                }, {
                    "id": 23,
                    "branch_id": 3,
                    "name": "Parada 6",
                    "latitude": -34.58297942423307,
                    "longitude": -58.44808710601808,
                    "created_at": "2018-06-06 19:58:07",
                    "updated_at": "2018-06-06 19:58:07"
                }, {
                    "id": 24,
                    "branch_id": 3,
                    "name": "Parada 7",
                    "latitude": -34.58049626262017,
                    "longitude": -58.45130745926468,
                    "created_at": "2018-06-06 19:58:19",
                    "updated_at": "2018-06-06 19:58:19"
                }, {
                    "id": 25,
                    "branch_id": 3,
                    "name": "Parada 8",
                    "latitude": -34.578655868779784,
                    "longitude": -58.46947957702639,
                    "created_at": "2018-06-06 19:58:28",
                    "updated_at": "2018-06-06 19:58:28"
                }]
            }
            ]            
        )
    }, 0) 
} )
}
*/