
function first (){
    console.log('first func')
}

function second (){
    console.log('second func')
}



function ifel(a) {

    if (a === 'jog' ) {
        console.log('A+')
        first ()
        console.log('first')
    } else if (a == 70) {
        console.log('A')
        second ()
    } else{
        console.log('no number')
    }

}

ifel('jog')