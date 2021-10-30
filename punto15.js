class fila
{
    constructor()
    {
        this.elementos={}   
        this.impares = {}    
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

    imparess()
    {
        for(let i = 0; i < this.final1; i++)
        {
            let valor = parseInt(this.elementos[i])
            if(valor % 2 != 0)
            {
                this.impares[this.final2] = valor
                this.final2++                
            }
        }
        console.log(this.impares)
    }
}
let pila1 = new fila()
pila1.encolar(4)
pila1.imparess()