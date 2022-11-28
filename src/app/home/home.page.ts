import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { GroupSelectComponent } from '../group-select/group-select.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  popover: HTMLIonPopoverElement | undefined;
  constructor(private popoverController: PopoverController) {
  }

  public async pop(event: any) {
    this.popover = await this.popoverController.create({
      showBackdrop: false,
      trigger: 'top-start',
      side: 'top',
      component: GroupSelectComponent,
      cssClass: 'group-select',
      event,
      translucent: true,
      componentProps: { width: 388, groupedOptions: [] }
    });
    await this.popover.present();
  }

}
