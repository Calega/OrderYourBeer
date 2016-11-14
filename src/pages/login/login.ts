import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FacebookLogin } from '../../util/facebook-login';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

  onLogin() {
    FacebookLogin.login(response => {
      alert(response);
    }, error => {
      alert(error.errorMessage);
    });
  }

}
