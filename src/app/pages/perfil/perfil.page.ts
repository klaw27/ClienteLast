import { Component, OnInit } from '@angular/core';
import { EstoreService } from '../../services/estore.service';
import { ToastController, ActionSheetController } from '@ionic/angular';
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
    direccionFiscal : undefined, 
    rfc : undefined, 
    CFDI :undefined, 
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

  constructor(public estore : EstoreService,
    public toastCtrl: ToastController,
    private camara: Camera,
    public actionSheetController: ActionSheetController,
    private _sanitizer: DomSanitizer) { }

  ngOnInit() {

    let body = {
      userId: localStorage.getItem('userId'),
      funcion: 'ver'
    };
    console.log(body);
    this.estore.verPerfil(body,'perfil.php').subscribe(data=>{
      console.log(data);
      this.usuario = {...data['usuario']};
      this.fotografia = this._sanitizer.bypassSecurityTrustUrl(`${this.usuario.fotografia}`);
     
    });
  }

  actualizar(){

    console.log(this.usuario);
    this.estore.actualizarPerfil(this.usuario, 'perfil.php').subscribe(data=>{
      console.log(data);
      if(data['success'] == true) {
        this.presentarToast("Muy bien perfil actualizado");
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

}
