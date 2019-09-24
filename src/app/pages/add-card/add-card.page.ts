import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NavController, AlertController, ToastController  } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';


declare var OpenPay: any;


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};


@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.page.html',
  styleUrls: ['./add-card.page.scss'],
})
export class AddCardPage implements OnInit {

  usuario:any = {
    nombre : undefined,
    email :undefined, 
    razonSocial : undefined,
    formaPago : undefined, 
    telefono : undefined,
    apellidoMat : undefined,
    apellidoPat: undefined,
    calle: undefined,
    colonia: undefined,
    numeroCalle: undefined,
    fotografia: undefined
  };


 
//class
 clienteOpen:any ='';
 customerOpenid:any ='';
  clientName:any ='';
  clientEmail:any ='';
  Customer= {  }
  cardData= {  }
  cliente:any="";
  deviceSessionId:any="";
  token_id: any ="";
  result: any ="";
  items: any ="";
  allData: any ="";
  myForm: FormGroup;

  error_messages = {
    'email': [
      { type: "required", message: "El email es requerido"},
      { type: "minLength", message: "Minimo 6444444444444444444444444444444444444"},
      { type: "maxLength", message: "Maximo 9444444444444"},
    ],
  }


  constructor(public alertController: AlertController, private router : Router,
    public navCtrl: NavController,
    public fb: FormBuilder,
    public http: HttpClient,
    public toastCtrl: ToastController 
    ){
      this.myForm = this.fb.group({
        numberCard: ['', [Validators.required, Validators.pattern(/^[a-z0-9_-]{15,16}$/)]],
        titular: ['', [Validators.required]],
        vencimiento: ['', [Validators.required, Validators.pattern(/^[a-z0-9_-]{2}$/)]], 
        cvv: ['', [Validators.required, Validators.pattern(/^[a-z0-9_-]{3,4}$/)]]
        //url: ['', [Validators.pattern(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)]],
        //password: ['', [Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
      });

     }


     
  ngOnInit() {
    this.customerOpenid = {...JSON.parse(localStorage.getItem('userOpen'))};
    this.usuario = {...JSON.parse(localStorage.getItem('user'))};
    this.clientName = this.usuario['nombre'];
    this.clientEmail= this.usuario['email'];
    console.log(this.clientEmail + " " + this.clientName + " id de openpay: ");
    console.log(this.customerOpenid);
    console.log( this.customerOpenid.id);
    //datos de openpay
    OpenPay.setId('mwvt7x3ehfnlgluepwng');
    OpenPay.setApiKey('pk_1a559d9438714db7b1b88ae6b5756358');
   //para sistema antifraude
   this.deviceSessionId = OpenPay.deviceData.setup();
    console.log(this.deviceSessionId);
    OpenPay.setSandboxMode(true);

    //OpenPay.getSandboxMode(); */
  
}


iniciar(){   
let account = false; 
this.Customer= {
      name: this.clientName,
      email: this.clientEmail,
      requires_account: account
    }
  }


  pagar(){
    this.iniciar();
    //formulario correcto
     OpenPay.token.extractFormAndCreate('customer-form', (response)=>{
      this.token_id= response.data.id;
      console.log(response);
      console.log(this.token_id + " se enviara formulario " + "Cliente: " + this.clientName + "Email: " + this.clientEmail);
      console.log(this.Customer);
     // this.presentarToast("La tarjeta se agrego correctamente");
       this.postDatos();
    }, (response)=>{
      //error en el formulario
      var desc = response.data.description != undefined ? response.data.description : response.message;
      this.presentarToast("ERROR [" + response.status + "] " + desc);
      console.log("ERROR [" + response.status + "] " + desc);
      console.log("El boton se bloquea");
    });
  }


  postDatos(){
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');

    //CREAR TARJETA
    this.cardData= {
      id: this.customerOpenid.id,
      token_id: this.token_id,
      device_session_id: this.deviceSessionId
    }


  // return this.http.post("http://localhost/api/Openpay/save_card.php",JSON.stringify(this.cardData),{headers:headers}).subscribe(
    return this.http.post("http://ec2-54-193-34-153.us-west-1.compute.amazonaws.com:5011/api/card/add",JSON.stringify(this.cardData),httpOptions).subscribe(
       data => {
          console.log("Tarjeta agregada al cliente");
          console.log(data);
          this.addCard();
        }, 
     error => {
      console.log(error);
    }); 
}


async presentarToast(mensaje) {
  const toast = await this.toastCtrl.create({
    message: mensaje,
    position: 'bottom',
    duration: 2000
  });
  toast.present();
}


  async addCard() {
    const alert = await this.alertController.create({
      header: 'Operacion exitosa',
      message: '¡La tarjeta se guardó correctamente!',
     buttons: [
      {
        text: 'Aceptar',
        handler: data => {
          this.router.navigateByUrl(`/tarjetas`);
        }
      }
    ]
    });

    await alert.present();
  }

  goCarrito(){
    this.navCtrl.navigateForward('/carrito');
  }
  
  goBuscar(){
    this.navCtrl.navigateForward("/buscar");
  }

  getEmail(event){
    this.clientEmail = event.target.value;
  }

  
  getClient(event){
    this.clientName = event.target.value;
  }
}
