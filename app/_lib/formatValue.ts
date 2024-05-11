export const formatValue = (value: number,currency : string): string => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: currency
    }).format(value)
}