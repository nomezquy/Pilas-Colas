class fila
{
    constructor()
    {
        this.elementos={}       
        this.principio=0
        this.final=0        
    }

    encolar(tamanio)
    {
        for(let i=0; i < tamanio; i++)
        {
            let valor=prompt("ingrese un valor: ")
            this.elementos[this.final]=valor
            this.final++
        }
    }

    sumar()
    {
        let suma = 0
        for(let i = 0; i < this.final; i++)
        {
            suma += parseInt(this.elementos[i])
             
        }
        console.log(this.elementos)
        console.log(suma)
    }


}
let pila1 = new fila()
pila1.encolar(4)
pila1.sumar()

