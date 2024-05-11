export const  calculateFinalValue = (value : number,tax : number,type : string,cotacao : number) =>{
    const iofMoney = 0.011
    const iofCard = 0.064
    if (type === 'dinheiro'){
        return (value+ tax) * (cotacao + iofMoney)
    }
    else{
        return (value+ tax) * (cotacao + iofCard)
    }
}