import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/core/services/firebase.service';


@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})

export class ImagesComponent {

  constructor(
    private firebaseStorage: FirebaseService
  ) {}

  public archivoForm = new FormGroup({
    archivo: new FormControl(null, Validators.required),
  });
  public mensajeArchivo = 'No hay un archivo seleccionado';
  public datosFormulario = new FormData();
  public nombreArchivo = '';
  public URLPublica = '';
  public porcentaje = 0;
  public finalizado = false;

  // Evento que se lanza cuando el input de tipo archivo cambia
  public cambioArchivo(event) {
    if (event.target.files.length > 0) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < event.target.files.length; i++) {
        this.mensajeArchivo = `Archivo preparado: ${event.target.files[i].name}`;
        this.nombreArchivo = event.target.files[i].name;
        this.datosFormulario.delete('archivo');
        this.datosFormulario.append('archivo', event.target.files[i], event.target.files[i].name);
      }
    } else {
      this.mensajeArchivo = 'No hay un archivo seleccionado';
    }
  }

  // Sube el archivo a Cloud Storage
  public subirArchivo() {
    const archivo = this.datosFormulario.get('archivo');
    const referencia = this.firebaseStorage.referenciaCloudStorage(this.nombreArchivo);
    const tarea = this.firebaseStorage.tareaCloudStorage(this.nombreArchivo, archivo);

    // Cambia el porcentaje
    tarea.percentageChanges().subscribe((porcentaje) => {
      console.log('porcentaje:', porcentaje);
      this.porcentaje = Math.round(porcentaje);
      if (this.porcentaje === 100) {
        this.finalizado = true;
      }
    });

  }

  public bajarArchivo() {
        // tslint:disable-next-line:no-shadowed-variable
        const referencia = this.firebaseStorage.referenciaCloudStorage(this.nombreArchivo);
        referencia.getDownloadURL().subscribe((URL) => {
          console.log('URL:', URL);
          this.URLPublica = URL;
        });

    }
}
