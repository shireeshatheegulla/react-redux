export const incNumber=()=>{
    return{
        type:'INCREMENT',
        payload:Number
    }
}
export const decNumber=()=>{
    return{
        type:'DECREMENT',
        payload:Number
    }
}