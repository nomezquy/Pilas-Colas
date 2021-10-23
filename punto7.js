class pila
{
    constructor()
    {        
        this.numeros = [2,1,4,"Elver",5,6,"Pedrito","Helver con H","Richi",[1,2,3,4],true,false,false,["Helver","Paseo"]] // 22
        this.strings = 0
        this.numers = 0
        this.arregles = 0
        this.bolas = 0                      
    }

    contarTipos()
    {
        for(let x = 0; x < this.numeros.length; x++)
        {
            if(typeof this.numeros[x] == "string")
            {
                //this.strings = this.strings + 1
                //this.strings += 1
                this.strings++

            }
            if(typeof this.numeros[x] == "number")
            {
                this.numers++
            }
            if(typeof this.numeros[x] == "boolean")
            {
                this.bolas++
            }
            if(typeof this.numeros[x] == "object")
            {
                this.arregles++
            }
        }
        console.log(this.numeros)
        console.log(`Cantidad de numeros : ${this.numers}`)
        console.log("Cantidad de strings: " + this.strings)        
        console.log(`Cantidad de arreglos : ${this.arregles}`)
        console.log(`Cantidad de boleeanos : ${this.bolas}`)
    }  
    
}
let pila1 = new pila
pila1.contarTipos()
