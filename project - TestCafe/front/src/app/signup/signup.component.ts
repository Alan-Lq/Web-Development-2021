import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProviderService} from '../service/provider.service';
import {LoginResponse} from '../model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: LoginResponse[] = [];
  public login = '';
  public password = '';
  public confirm = '';
  public name = '';
  public email = '';

  constructor(private provider: ProviderService, private router: Router) { }

  ngOnInit(): void {
     let users = localStorage.getItem('users');
     console.log(users);
  }

  clear() {
    this.login = '';
    this.password = '';
    this.confirm = '';
    this.name = '';
    this.email = '';
  }

  signup() {
    if (!this.login || !this.password || !this.confirm) {
      alert('You need to fill all fields.');
      this.clear();
    } else if (this.password !== this.confirm) {
      alert('Passwords do not match.');
    }
    this.provider.postUser(this.login, this.password, this.name, this.email).subscribe(res => {
        this.user.push(res);
        console.log(this.login, this.password, this.name, this.email);
        localStorage.setItem('name', res.username);
        localStorage.setItem('users', JSON.stringify(this.user));
        this.clear();
        this.router.navigate(['/login']);
        alert('You were successfully signed up.');
      });
  }
}
