import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async mostrarModal() {
    const modal = this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: "Jonathan",
        pais: "Argentina"
      }
    });
   await (await modal).present();

    const { data } = await (await modal).onDidDismiss();

    //se puede usar el onWillDismiss que se ejecuta antes de que se cierre el modal, durante el cierre
    console.log(data);
    console.log(JSON.stringify(data));
  }
}
