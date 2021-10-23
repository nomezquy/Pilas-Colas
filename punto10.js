class pila
{
    constructor()
    {        
        this.arreglo = ["Daniel","Eugenio","Martin","Calvin","Helver","Tilin","Alcibiades"] 
        this.nuevoarr = []                           
    }


    eliminar()
    {        
        let campo = parseInt(prompt("Ingrese la posición a eliminar: "))
        for(let x = 0; x < this.arreglo.length; x++)
        {
            if(campo <= x)
            {
               this.nuevoarr.push(this.arreglo[x])                   
            }          
        }
        console.log(this.nuevoarr)
    }
}

let pila1 = new pila()
pila1.eliminar()