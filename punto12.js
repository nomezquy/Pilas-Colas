class fila{
    constructor(){
        this.elementos={}
        this.nuevaLis={}
        this.principio=0
        this.final=0
    }
    encolar(){
        for(let i=0; i<4;i++){
            let valor=prompt("ingrese un valor: ")
            this.elementos[this.final]=valor
            this.final++
        }
    }
        validarOrden(){
        for(let i=0;i<this.final;i++){
            if(this.elementos[i]%2==0){
                this.nuevaLis[i]=true
        }
        else{
            this.nuevaLis[i]=false
        }
        }
        console.log(this.elementos)
        console.log(this.nuevaLis)

    }


}
let pila1 = new fila()
pila1.encolar()
pila1.validarOrden()

