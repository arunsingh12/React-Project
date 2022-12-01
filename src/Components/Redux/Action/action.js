export const Add_Cart = (data)=>{
    // console.log(data)
    return{
        "type": "AddToCart",
        "payload": data,
    }
}

export const Remove_item = (id)=>{
    return{
        "type": "RemoveCart",
        "payload": id ,
    }
}

export const DecreaseItem = (less)=>{
    // console.log(less)
    return{
        "type": "DecreaseCount",
        "payload" : less ,
    }
}