import { Component, OnInit } from '@angular/core';
import { faTrashAlt , faPlus,faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  faPlus = faPlus;
  faPen=faPen;
  faTrash= faTrashAlt;

  constructor() { }

  ngOnInit(): void {
  }

  sumarProyecto(){
    
  }
}
