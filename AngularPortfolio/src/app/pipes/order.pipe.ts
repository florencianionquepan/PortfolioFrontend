import { Pipe, PipeTransform } from "@angular/core";
import { Experiencia } from "../models/experiencia";
@Pipe({
    name:'order'
})
export class OrderPipe implements PipeTransform{
    transform(value: Experiencia[]): any {
        let newValue=value.sort((a:Experiencia,b:Experiencia)=>{
            console.log(a.fechaInicio);
            if(b.fechaInicio.slice(-4)>a.fechaInicio.slice(-4)){
                return 1;
            }else if(b.fechaInicio.slice(-4)<a.fechaInicio.slice(-4)){
                return -1;
            }else{
                return 0;
            }
        })
        return newValue;
    }
}