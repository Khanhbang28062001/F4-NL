import { UserService } from './../Service/user.service';
import { UserModule } from './../model/user.module';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  public userName = "";
  public email = "";
  public passWord = "";
  public minLength = 6;
  errorMessage: string | undefined;

  public formData = this.formBuilder.group({
    username: ['', [Validators.required, Validators.maxLength(30)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    idrole: [1]
  });

  constructor(private common: CommonService,
    private formBuilder: FormBuilder,
    private UserService: UserService,
  ) {

  }

  ngOnInit(): void {
  }

  inputSignUp(): void {
    console.log('UserService', this.formData.valid);
    if (this.formData.valid) {
      this.UserService.AddUser(this.formData.value).subscribe((data) => {
        console.log('UserService', data);
      });

    } else {
      console.log("thông tin không hợp lệ !!!")
      this.errorMessage = 'Vui lòng nhập đầy đủ thông tin và kiểm tra lại';
      Object.keys(this.formData.controls).forEach(key => {
        const controlErrors: ValidationErrors = this.formData.get(key)?.errors || {};
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            const error = controlErrors[keyError];
            this.formData.get(key)!.setErrors({ customError: error });
          });
        }
      });
    }


  }
  // const payload = this.formData.value;

}






