class pila
{
    constructor()
    {        
        this.numeros = [2,1,4,4,5,6] // 22
        this.pares = []                      
    }

    separarPares()
    {
        for(let x = 0; x < this.numeros.length;x++)
        {
            if(this.numeros[x] % 2 == 0)
            {
                this.pares.push(this.numeros[x])
            }
        }
        console.log(this.numeros)
        console.log(this.pares)
    }  
    
}
let pila1 = new pila
pila1.separarPares()