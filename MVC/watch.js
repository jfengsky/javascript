var PI = 3.14

function clubArea(wide) {
    return wide * wide
}

function circleArea(wide) {
    return PI * (wide / 2)
}

var wide = 10

function print(wide){
    console.log( 'clubArea: ' + clubArea(wide))
    console.log( 'circleArea: ' + circleArea(wide))
}

print(wide)