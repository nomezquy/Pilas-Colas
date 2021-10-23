// Punto 1

class pilon{

    constructor()
    {
        this.numeros = []
        this.nombre = "Pila / Stack"
    }

    rellenar()
    {
        let tamanio = parseInt(prompt("Ingrese la cantidad de elementos a ingresar: "))
        for(let x = 1; x <= tamanio; x++)
        {
         let valor = prompt("Ingrese un valor: ")
         this.numeros.push(valor)
        }
        console.log(this.numeros)
    }

}
let pila1 = new pilon()
pila1.rellenar()
