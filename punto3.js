class pila{

    constructor()
    {        
        this.numeros = [2,1,4,4,"tilin",5,6,false] // 22
        this.resultado = 0               
    }

    sumar()
    {
        for(let x = 0; x < this.numeros.length;x++)
        {
           if(typeof this.numeros[x] == "number" )
           {
                this.resultado += this.numeros[x]
           }
           else
           {
               console.log(x)
               console.log(typeof this.numeros[x])
           } 
                  
            
        }
        console.log(this.numeros)         
        console.log(this.resultado)

    }

    
}
let pila1 = new pila
pila1.sumar()


