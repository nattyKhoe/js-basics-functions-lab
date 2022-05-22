// Code your solution in this file!//
//loc0=42//
function distanceFromHqInBlocks (loc1){
    return Math.abs(42-loc1);
}

function distanceFromHqInFeet (loc1){
    return distanceFromHqInBlocks(loc1)*264;
}
function distanceTravelledInFeet (loc1, loc2){
    return Math.abs(loc1-loc2)*264;
}

function calculatesFarePrice (start,destination){
    let distance = distanceTravelledInFeet(start,destination);
    switch (true) {
        case distance<= 400:
            return 0;
            break;
        case distance<=2000:
            return (distance-400)*0.02;
            break;
        case distance<=2500:
            return 25;
            break;
        case distance>2500:
            return `cannot travel that far`;
            break;
    }
}
