import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {

  constructor() {}
  ImageUrlArray!: any[];
  ownImageUrlArray!: any[];
  setImageUrlArray(props: string[]): void {
    this.ImageUrlArray = props;
  }
  setownImageUrlArray(ownImageUrlArray: any) {
    this.ownImageUrlArray = ownImageUrlArray;
  }
}
