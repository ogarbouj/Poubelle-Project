import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeService } from 'src/app/services/typeService/Type.service';
import { Type } from 'src/app/models/type/type.model';
@Component({
  selector: 'app-editType',
  templateUrl: './editType.component.html',
  styleUrls: ['./editType.component.scss']
})
export class EditTypeComponent implements OnInit {
  typeForm: FormGroup;
  typeId: string;

  constructor(
    private formBuilder: FormBuilder, 
    private typeService: TypeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.typeForm = this.formBuilder.group({
      nom: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.typeId = this.route.snapshot.paramMap.get('id');
    this.typeService.getType(this.typeId).subscribe(type => {
      this.typeForm.patchValue(type);
    });
  }

  onSubmit(): void {
    if (this.typeForm.valid) {
      const updatedType: Type = this.typeForm.value;
      this.typeService.updateType(this.typeId, updatedType).subscribe(() => {
        console.log('Type updated successfully');
        this.router.navigate(['/listeType']); // navigate back to type list after successful update
      }, error => {
        console.error('Error occurred while updating type', error);
      });
    }
  }
}