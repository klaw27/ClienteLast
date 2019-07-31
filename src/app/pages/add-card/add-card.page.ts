import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NavController, AlertController, ToastController  } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

declare var OpenPay: any;


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

  clientName:any ='';
  clientEmail:any ='';
  customerData= {  }
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

    this.usuario = {...JSON.parse(localStorage.getItem('user'))};
    this.clientName = this.usuario['nombre'];
    this.clientEmail= this.usuario['email'];
    console.log(this.clientEmail + " " + this.clientName);
 
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
   this.customerData= {
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
      console.log(this.customerData);
     // this.presentarToast("La tarjeta se agrego correctamente");

       this.postDatos();

    }, (response)=>{
      //error en el formulario
      var desc = response.data.description != undefined ? response.data.description : response.message;
      this.presentarToast("ERROR [" + response.status + "] " + desc);
     // alert("ERROR [" + response.status + "] " + desc);
      console.log("ERROR [" + response.status + "] " + desc);
      console.log("El boton se bloquea");
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

  postDatos(){
  
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
   
        
    //CREAR CLIENTE
    this.http.post("http://localhost/api/Openpay/save_customer_card.php",JSON.stringify(this.customerData),{ headers:headers}).subscribe(
     data => {
      console.log("Cliente Creado");
      console.log(data['cliente']);
     }, error => {
      console.log(error);
    }); 



    //CREAR TARJETA
    /*this.cardData= {
      token_id: this.token_id,
      device_session_id: this.deviceSessionId
    }

    return this.http.post("http://localhost/api/Openpay/save_card.php",JSON.stringify(this.cardData),{ headers:headers}).subscribe(
      data => {
          console.log("Tarjeta agregada al cliente");
          console.log(data);
        }, 
     error => {
      console.log(error);
    }); */
    

}



  saveData(){
    console.log(JSON.stringify(this.myForm.value));
    this.addCard();
    this.router.navigateByUrl(`/tarjetas`);

  }

  async addCard() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¡La tarjeta se guardó correctamente!',
     buttons: ['Aceptar']
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
