class fila
{
    constructor()
    {
        this.elementos={}   
        this.strings = {}    
        this.principio1=0
        this.final1=0  
        this.final2 = 0      
    }

    encolar(tamanio)
    {
        for(let i=0; i < tamanio; i++)
        {
            let check = prompt("n para numero, s para string")
            if(check == "n")
            {
                let valor = parseInt(prompt("ingrese un valor: "))
                this.elementos[this.final1]=valor
                this.final1++
            }
            if(check =="s")
            {
                let valor = prompt("ingrese un valor: ")
                this.elementos[this.final1]=valor
                this.final1++
            }            
        }
    }

    stringss()
    {
        for(let i = 0; i < this.final1; i++)
        {            
            if(typeof this.elementos[i] == "string")
            {
                this.strings[this.final2] = this.elementos[i]
                this.final2++                            
            }
        }
        console.log(this.strings)
    }
}
let pila1 = new fila()
pila1.encolar(4)
pila1.stringss()