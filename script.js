function walkDog(){
   
    return new Promise ((resolve,reject)=> {
        setTimeout(()=> {
            const walk = true;
            if(walk){
                resolve("the dog is walking");
            }else{
                reject("The dog is Lazyy!!");
            }
        },1500);
    })
}

function cleanTheKitchen(){
    return new Promise ((resolve,reject) => {
        setTimeout(()=> {
            const kitchen = true;
            if(kitchen){
                resolve("You cleaned then kitchen!!!");
            }else{
                reject("You are Lazyy!!");
            }

        }, 2500);
    })
}
function takeOutTrash(){
   
    return new Promise ((resolve,reject) =>{
        setTimeout(()=> {
            const trash = true;
            if(trash){
                resolve("You cleaned the trash!!!");
            }else{
                reject("You are Lazyy to clean up trash!!");
            }
        },500);
    })
}

async function Todo() {
    try{
        const dog = await walkDog();
        console.log(dog);

        const kitchen = await cleanTheKitchen();
        console.log(kitchen);

        const trash = await takeOutTrash();
        console.log(trash);
    }catch(error){
        console.error(error);
    }
   
}
Todo();
