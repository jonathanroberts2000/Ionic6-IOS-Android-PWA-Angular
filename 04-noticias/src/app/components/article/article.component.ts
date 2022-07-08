import { Component, Input } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { ActionSheetController, Platform } from '@ionic/angular';
import { Article } from 'src/app/interfaces';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {

  @Input() article: Article;
  @Input() index: number;

  constructor(private iab: InAppBrowser, private platform: Platform, private actionSheetCtrl: ActionSheetController) { }

  openArticle(): void {
    if(this.platform.is("ios") || this.platform.is("android")){
      const browser = this.iab.create(this.article.url);
      browser.show();
      return;
    }

    window.open(this.article.url, "_blank");
  }

  async onOpenMenu() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: "Opciones",
      buttons: [
        {
          text: "Compartir",
          icon: "share-outline",
          handler: () => this.onShareArticle()
        },
        {
          text: "Favorito",
          icon: "heart-outline",
          handler: () => this.onToggleFavorite()
        },
        {
          text: "Cancelar",
          icon: "close-outline",
          role: "cancel",
        }
      ]
    });

    await actionSheet.present();
  }

  onShareArticle(): void {
    console.log("share article");
  }

  onToggleFavorite(): void {
    console.log("toggle favorite");
  }

}
