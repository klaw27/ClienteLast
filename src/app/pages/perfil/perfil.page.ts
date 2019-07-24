import { Component, OnInit } from '@angular/core';
import { EstoreService } from '../../services/estore.service';
import { ToastController, ActionSheetController, NavController } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';
import { DomSanitizer } from '@angular/platform-browser';

declare function escape(s:string): string;


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})

export class PerfilPage implements OnInit {

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

  fotografia:any;

  ipnNom:any = "";
  ipnApeMat:any = "";
  ipnApePat:any = "";

  constructor(public estore : EstoreService,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    private camara: Camera,
    public actionSheetController: ActionSheetController,
    public toastController: ToastController,
    private _sanitizer: DomSanitizer) { }

  ngOnInit() {
      this.usuario = {...JSON.parse(localStorage.getItem('user'))};
      this.fotografia = this._sanitizer.bypassSecurityTrustUrl(`${this.usuario.fotografia}`);
  }

  validar(){

    let body= {
      ipnNom: this.ipnNom= (document.getElementById('1') as HTMLInputElement).value,
      ipnApePat: this.ipnApePat = (document.getElementById('2') as HTMLInputElement).value,
      ipnApeMat: this.ipnApeMat = (document.getElementById('3') as HTMLInputElement).value
    } 

    if(this.ipnNom == '' && this.ipnApeMat == '' && this.ipnApePat == '' ) {
    this.presentarToast('Todos los campos son obligatorios');
    }else if (this.ipnNom== ''){
      this.presentarToast('El nombre es obligatorio');
    }else if (this.ipnApeMat == ''){
      this.presentarToast('El Apellido Materno es obligatorio');
    }else if (this.ipnApePat == ''){
      this.presentarToast('El Apellido Paterno es obligatorio');
    }//SI SE CAPTURO TODA LA INFORMACION REALIZA EL LOGIN
    else{
      console.log("hola " + this.ipnNom +" " + this.ipnApePat + " "+ this.ipnApeMat );
      this.actualizar();
    }
  }


  actualizar(){

    
      console.log(this.usuario);
      this.estore.actualizarPerfil(this.usuario, 'perfil.php').subscribe(data=>{
      console.log(data);
      if(data['success'] == true) {
        this.presentarToast("¡El Perfil se actualizo correctamente!");
        localStorage.setItem('user',JSON.stringify(this.usuario));
        setTimeout(()=>{
          this.navCtrl.navigateBack('/dashboard');
        },750);
      }
      else this.presentarToast("Error, algo salio mal");
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

  imgPreAlb(){
    let imagen = document.getElementById("perfil");
    this.camara.getPicture({
      quality : 100,
      destinationType : this.camara.DestinationType.DATA_URL,
      sourceType : this.camara.PictureSourceType.PHOTOLIBRARY,
      allowEdit : true,
      encodingType: this.camara.EncodingType.JPEG,
      targetWidth: 600,
      targetHeight: 600,
      saveToPhotoAlbum: true
    }).then(foto=>{
      foto = escape(foto);
      this.usuario.fotografia = 'data:image/jpg;base64,'+foto;
      this.fotografia = this._sanitizer.bypassSecurityTrustUrl(`${this.usuario.fotografia}`);

    });

  }

  imgPreCam(){
    let imagen = document.getElementById("perfil");
    this.camara.getPicture({
      quality : 100,
      destinationType : this.camara.DestinationType.DATA_URL,
      sourceType : this.camara.PictureSourceType.CAMERA,
      allowEdit : true,
      encodingType: this.camara.EncodingType.JPEG,
      targetWidth: 600,
      targetHeight: 600,
      saveToPhotoAlbum: true
    }).then(foto=>{
      foto = escape(foto);
      this.usuario.fotografia = 'data:image/jpg;base64,'+foto;
      this.fotografia = this._sanitizer.bypassSecurityTrustUrl(`${this.usuario.fotografia}`);

    });

  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Cámara',
        icon: 'camera',
        handler: () => {
          this.imgPreCam();
        }
      }, {
        text: 'Galeria',
        icon: 'images',
        handler: () => {
          this.imgPreAlb();
        }
      },
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel'
      }
    ]
    });
    await actionSheet.present();
  }

  goCarrito(){
    this.navCtrl.navigateForward('/carrito');
  }
  
  goBuscar(){
    this.navCtrl.navigateForward("/buscar");
  }

}
