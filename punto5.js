class pila
{
    constructor()
    {        
        this.numeros = [2,1,4,4,5,6] // 22
        this.impares = []                      
    }

    separarImpares()
    {
        for(let x = 0; x < this.numeros.length;x++)
        {
            if(this.numeros[x] % 2 != 0)
            {
                this.impares.push(this.numeros[x])
            }
        }
        console.log(this.numeros)
        console.log(this.impares)
    }  
    
}
let pila1 = new pila
pila1.separarImpares()