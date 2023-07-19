import { Component, OnInit } from '@angular/core';
import { Type } from 'src/app/models/type/type.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TypeService } from 'src/app/services/typeService/Type.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-AjoutType',
  templateUrl: './AjoutType.component.html',
  styleUrls: ['./AjoutType.component.scss']
})
export class AjoutTypeComponent implements OnInit {
  typeForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private typeService: TypeService,private router:Router) { }

  ngOnInit(): void {
    this.typeForm = this.formBuilder.group({
      nom: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.typeForm.valid) {
      const newType: Type = this.typeForm.value;
      this.typeService.createType(newType).subscribe(type => {
        console.log('Type created successfully', type);
        this.router.navigate(['/listeType']);
        // You can handle success action here
      }, error => {
        console.error('Error occurred while creating type', error);
        // You can handle error action here
      });
    }
  }
}
