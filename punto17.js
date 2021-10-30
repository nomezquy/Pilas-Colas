class fila
{
    constructor()
    {
        this.elementos={}              
        this.principio1=0
        this.final1=0
        this.contNumeros = 0
        this.contStrings = 0
        this.contBools = 0
            
    }

    encolar(tamanio)
    {
        for(let i=0; i < tamanio; i++)
        {
            let check = prompt("n para numero, s para string, b para booleanos")
            if(check == "n")
            {
                let valor = parseInt(prompt("ingrese un valor: "))
                this.elementos[this.final1]=valor
                this.final1++
                this.contNumeros++
            }
            if(check =="s")
            {
                let valor = prompt("ingrese un valor: ")
                this.elementos[this.final1]=valor
                this.final1++
                this.contStrings++
            }
            if(check == "b")
            {
                let valor = prompt("ingrese un valor: ")
                if(valor == "true")
                {
                    this.elementos[this.final1] = true
                    this.final1++
                    this.contBools++
                }
                if(valor == "false")
                {
                    this.elementos[this.final1] = false
                    this.final1++
                    this.contBools++
                }
            }            
        }
    }
    resultados()    
    {
        console.log("Strings: " + this.contStrings)
        console.log("numeros: " + this.contNumeros)
        console.log("booleanos: " + this.contBools)

    }
}
let pila1 = new fila()
pila1.encolar(4)
pila1.resultados()