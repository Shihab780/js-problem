// create two func
// create another func whit condisonal fast and seconud func 

function add (){
    console.log('add is run');
    
}

function add2 (){
    console.log('add to is run');
    
}

function add4 (num1){
    if(num1==='fast'){
        add()
    }
    else if(num1==='sec'){
        add2()
    }
    else {
        console.log('not');
        
    }
}

add4('ii')