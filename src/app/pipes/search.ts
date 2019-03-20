import {Pipe,PipeTransform} from '@angular/core';

@Pipe ({
   name: 'search'
})

export class SearchPipe implements PipeTransform {
  public transform(value, args: string){  /*value:recibe el arreglo, args: la palabra de busqueda*/
    if(!value){  /*si no recibe arreglo*/
      return;
    }
    if(!args){
      return value; /*devuelve el arreglo completo si no ha escrito nada*/
    }
    args= args.toLowerCase();
    return value.filter((item) => {
      return JSON.stringify(item).toLowerCase().includes(args); /*toma el string y chequea si incluye la palabra que buscamos*/
    });
  }
}
