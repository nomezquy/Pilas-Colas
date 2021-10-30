class fila
{
    constructor()
    {
        this.elementos={}   
        this.pares = {}    
        this.principio1=0
        this.final1=0  
        this.final2 = 0      
    }

    encolar(tamanio)
    {
        for(let i=0; i < tamanio; i++)
        {
            let valor=prompt("ingrese un valor: ")
            this.elementos[this.final1]=valor
            this.final1++
        }
    }

    paress()
    {
        for(let i = 0; i < this.final1; i++)
        {
            let valor = parseInt(this.elementos[i])
            if(valor % 2 == 0)
            {
                this.pares[this.final2] = valor
                this.final2++                
            }
        }
        console.log(this.pares)
    }
}
let pila1 = new fila()
pila1.encolar(4)
pila1.paress()