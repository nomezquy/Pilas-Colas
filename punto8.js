class pila
{
    constructor()
    {        
        this.arreglo = ["Daniel","Eugenio","Martin","Calvin"] 
        this.nuevoarr = []                           
    }


    eliminar()
    {
        console.log("Valores disponibles: ")
        console.log(this.arreglo)
        let campo = prompt("Ingrese el valor a eliminar: ")
        for(let x = 0; x < this.arreglo.length; x++)
        {
            if(campo != this.arreglo[x])
            {
               this.nuevoarr.push(this.arreglo[x])                   
            }          
        }
        console.log(this.nuevoarr)
    }
}

let pila1 = new pila()
pila1.eliminar()