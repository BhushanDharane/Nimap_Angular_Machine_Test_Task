import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';


interface User {
  name: string;
  email: string;
  country: string;
  mobile: string;
  tags: string;
  photoUrl: string;
}
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user: any ={
    country: '',
    mobile: '',
    tags: '',
    photoUrl: 'https://static.vecteezy.com/system/resources/previews/003/715/527/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg' // Provide a default photo URL
  };
  editMode = false;

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  saveChanges() {
    // Implement logic to save changes to backend
    this.editMode = false;
  }

  cancelEdit() {
    // Reset form fields or revert changes
    this.editMode = false;
  }

  changePhoto() {
    // Implement logic to change user's photo
  }

  handlePhotoChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      // Display the uploaded image
      this.user.photoUrl = e.target.result;
    };
    reader.readAsDataURL(file);
  }
  
}


  
