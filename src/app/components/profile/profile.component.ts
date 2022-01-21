import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  business = Object;

  constructor(private authService: AuthService) { }

   ngOnInit() {
        this.authService.getProfile().subscribe(profile => {
          this.business= profile.user;
          console.log(profile)
        }, err => {
          console.log(err);
          return false;
        });
  }
    
}
