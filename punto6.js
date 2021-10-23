class pila
{
    constructor()
    {        
        this.numeros = [2,1,4,"Elver",5,6,"Pedrito","Helver con H","Richi"] // 22
        this.strings = []                      
    }

    separarString()
    {
        for(let x = 0; x < this.numeros.length;x++)
        {
            if(typeof this.numeros[x] == "string")
            {
                this.strings.push(this.numeros[x])
            }
        }
        console.log(this.numeros)
        console.log(this.strings)
    }  
    
}
let pila1 = new pila
pila1.separarString()