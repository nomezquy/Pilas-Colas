class cola
{
  constructor()
  {
    this.elementos = {};
    this.primero = 0;
    this.final = 0;
  }  

   rellenar1(parametro)
   {      
       this.elementos[this.final] = parametro
       this.final++     
        
   }

}

let cola1 = new cola()
let tamanio = parseInt(prompt("Ingrese la cantidad de elementos a ingresar: "))
for(let x = 1; x <= tamanio; x++)
{
 let valor = prompt("Ingrese un valor: ")
 cola1.rellenar1(valor) 
}
console.log(cola1.elementos)

