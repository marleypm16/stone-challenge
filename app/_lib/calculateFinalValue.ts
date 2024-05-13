export const  calculateFinalValue = (value : number,tax : number,type : string,quotation : number) =>{
    const iofMoney = 0.011
    const iofCard = 0.064
    if (type === 'dinheiro'){
        return (value+ tax) * (quotation + iofMoney)
    }
    else{
        return (value+ tax) * (quotation + iofCard)
    }
}