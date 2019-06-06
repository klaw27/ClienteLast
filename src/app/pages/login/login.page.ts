import { Component, OnInit } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { HttpClient } from '@angular/common/http';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  data:any;

  constructor(private fb: Facebook,
    private http: HttpClient,
    private googlePlus: GooglePlus,
    public menu : MenuController) { 
    }

    ionViewWillEnter(){
      this.menu.enable(true);
    }

  ngOnInit() {
  }

  facebooklog(){
    this.fb.login(['public_profile', 'email']).then((res: FacebookLoginResponse) => {
      console.log('Logged into Facebook!', res);
      this.getData(res.authResponse.accessToken);
    }).
    catch(error=>{
      console.log(error);
    });
  }

  googleLogin(){
    this.googlePlus.login({})
    .then(res => console.log(JSON.stringify(res)))
    .catch(err => console.error(err));
  }

  getData(access_token: string){
    let url = "https://graph.facebook.com/me?fields=id,location,gender,name,last_name,email&access_token="+access_token;
    this.http.get(url).subscribe(data=>{
      this.data = JSON.stringify(data);
      console.log(data);
    });
  }

}
