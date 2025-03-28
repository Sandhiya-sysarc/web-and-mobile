import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-camera-plugin',
  templateUrl: './camera-plugin.page.html',
  styleUrls: ['./camera-plugin.page.scss'],
  standalone: false,
})
export class CameraPluginPage implements OnInit {
  photo: string | undefined;

  constructor() { }

  ngOnInit() {
  }
  
  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });
      this.photo = image.dataUrl;
      console.log('Captured photo:', image);
    } catch (error) {
      console.error('Error taking picture:', error);
    }
  }
}
