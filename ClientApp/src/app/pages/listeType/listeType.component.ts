import { Component, OnInit } from '@angular/core';
import { TypeService } from 'src/app/services/typeService/Type.service';
import { Type } from 'src/app/models/type/type.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listeType',
  templateUrl: './listeType.component.html',
  styleUrls: ['./listeType.component.scss']
})
export class ListeTypeComponent implements OnInit {
  types: Type[];
  constructor(private typeService: TypeService,
    private router: Router  ) { }

  ngOnInit(): void {
    this.typeService.getAllTypes().subscribe(types => {
      this.types = types;
    });
  }

  deleteType(id: string): void {
    this.typeService.deleteType(id).subscribe(() => {
      this.types = this.types.filter(type => type._id !== id);
    });
  }

  // Update this method to handle editing types.
  // You may want to implement a separate component or modal to handle the editing form.
  editType(type: Type): void {
    // Example: Navigate to a TypeEditComponent
    // this.router.navigate(['/type-edit', type._id]);
    this.router.navigate(['/editType',type._id]);
  }
}
