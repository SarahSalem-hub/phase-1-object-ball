
function gameObject(){
    return {
        "home":{
            "teamName": "Brooklyn Nets",
            "colors": ["Black", "White"],
            "players":{
                "Alan Anderson":{
                    "number":0 ,
                    "shoe":16 ,
                    "points":22 ,
                    "rebounds":12 ,
                    "assists":12 ,
                    "steals":3,
                    "blocks":1,
                    "slamDunks":1,
                },
                "Reggie Evans":{
                    "number":30,
                    "shoe":14,
                    "points":12,
                    "rebounds":12,
                    "assists":12,
                    "steals":12,
                    "blocks":12,
                    "slamDunks":7,   
                },
                "Brook Lope":{
                        "number":11,
                        "shoe":17,
                        "points":17,
                        "rebounds":19,
                        "assists":10,
                        "steals":3,
                        "blocks":1,
                        "slamDunks":15,   
                    },
                    "Mason Plumlee":{
                        "number":1,
                        "shoe":19,
                        "points":26,
                        "rebounds":12,
                        "assists":6,
                        "steals":3,
                        "blocks":8,
                        "slamDunks":5,   
                    },
                    "Jason Terry":{
                        "number":31,
                        "shoe":15,
                        "points":19,
                        "rebounds":2,
                        "assists":2,
                        "steals":4,
                        "blocks":11,
                        "slamDunks":1,   
                    },
                
            }
        },
        "away":{
            "teamName":"Charlotte Hornets",
            "colors":["Turquoise", "Purple"],
            "players":{
                "Jeff Adrien":{
                "number":4,
                "shoe":18,
                "points":10,
                "rebounds":1,
                "assists":1,
                "steals":2,
                "blocks":7,
                "slamDunks":2,
                },
                "Bismak Biyombo":{
                    "number":0,
                    "shoe":16,
                    "points":12,
                    "rebounds":4,
                    "assists":7,
                    "steals":7,
                    "blocks":15,
                    "slamDunks":10,   
                },
                "DeSagna Diop":{
                    "number":2,
                    "shoe":14,
                    "points":24,
                    "rebounds":12,
                    "assists":12,
                    "steals":4,
                    "blocks":5,
                    "slamDunks":5,   
                },
                "Ben Gordon":{
                    "number":8,
                    "shoe":15,
                    "points":33,
                    "rebounds":3,
                    "assists":2,
                    "steals":1,
                    "blocks":1,
                    "slamDunks":0,   
                },
                "Brendan Haywood":{
                    "number":33,
                    "shoe":15,
                    "points":6,
                    "rebounds":12,
                    "assists":12,
                    "steals":22,
                    "blocks":5,
                    "slamDunks":12,   
                },
                
            }
        },
    }
}


function numPointsScored(player){
    
    let objects = gameObject()
    
    for (const element of Object.keys(objects)){
        let arr = Object.keys(objects[element]['players'])
        for (const each of arr){
            if (each === player){
                console.log(objects[element]['players'][each]["points"])
            }
        }
        
    }
}
function shoeSize(player){
    let objects = gameObject()
    
    for (const element of Object.keys(objects)){
        let arr = Object.keys(objects[element]['players'])
        for (const each of arr){
            if (each === player){
                console.log(objects[element]['players'][each]["shoe"])
            }
        }
        
    }
}

function teamColors(teamName){
    let objects = gameObject()
    
    for (const element of Object.keys(objects)){
        let arrOfProp = Object.entries(objects[element])
            if (arrOfProp[0][1] === teamName){
                return arrOfProp[1][1]
            }
    }

}
function teamNames(){
    let objects = gameObject()
    let teamNameS = Object.entries(objects)
    let newArry = []
    for (const team of teamNameS){
        newArry.push(team[1]["teamName"])
    }
    return newArry
}
function playerNumbers(teamname){
    let obj = gameObject()
    let keys = Object.keys(gameObject())
    let num = []
    for (let one of keys){
        if (obj[one]["teamName"] === teamname){
            let pla = Object.keys(obj[one]["players"])
             num =  pla.map(function (two){
                return obj[one]["players"][two]["number"]
            })
            
        }
    }
    let aggregation = num.reduce(function (accum, currentValue) { return accum + currentValue}, 0)
    return aggregation

}


console.log(playerNumbers("Brooklyn Nets"))