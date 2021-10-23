// Punto 2

class pila{

    constructor()
    {        
        this.numeros = [2,1,4,4,5,6]
        this.resultado = []               
    }

    validarOrden()
    {
        for(let x = 0; x < this.numeros.length;x++)
        {
            if(this.numeros[x] % 2 == 0)
            {
                this.resultado.push(true)
            }
            else
            {
                this.resultado.push(false)
            }   
        }
        console.log(this.numeros)         
        console.log(this.resultado)

    }

    
}
let pila1 = new pila
pila1.validarOrden()

