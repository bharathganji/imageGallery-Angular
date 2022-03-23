import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { createClient } from '@supabase/supabase-js';
import { ImageService } from 'src/app/shared/image.service';

@Component({
  selector: 'app-imageviewer',
  templateUrl: './imageviewer.component.html',
  styleUrls: ['./imageviewer.component.css'],
})
export class ImageviewerComponent implements OnInit {
  constructor(private imageService: ImageService) {}

  SERVICE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxmd2ZzeWRoaGpzZXNuZ3dmaGthIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0Nzg0MzcxNCwiZXhwIjoxOTYzNDE5NzE0fQ.3lGPEiVASlV_6kOieZ78hwB2abTCMBumoJWzmajGmJ4';
  SUPABASE_URL = 'https://lfwfsydhhjsesngwfhka.supabase.co';
  supabase = createClient(this.SUPABASE_URL, this.SERVICE_KEY);
  ImageUrlArray: any = {};
  ownImageUrlArray: any = {};

  async ownImage() {
    const { data, error1 }: any = await this.supabase.storage
      .from('public-bucket')
      .list('own', {
        limit: 1000,
        // offset: 0,
        // sortBy: { column: 'name', order: 'asc' },
      });
      
    return data;
  }
  async allImage() {
    const { data, error }: any = await this.supabase.storage
      .from('public-bucket')
      .list('all', {
        limit: 1000,
        // offset: 0,
        // sortBy: { column: 'name', order: 'asc' },
      });
    return data;
  }

  ngOnInit() {
    this.ownImage().then((resolve) => {
      this.ownImageUrlArray = resolve.map((element: any) => {
        return {
          url: `https://lfwfsydhhjsesngwfhka.supabase.in/storage/v1/object/public/public-bucket/own/${element.name}`,
          name: element.name,
        };
      });
    });
    this.allImage().then((resolve) => {
      this.ImageUrlArray = resolve.map((element: any) => {
        return {
          url: `https://lfwfsydhhjsesngwfhka.supabase.in/storage/v1/object/public/public-bucket/all/${element.name}`,
          name: element.name,
        };
      });
    });
    // let allImage = this.allImage();

    // this.ownImageUrlArray = allImage.map((element: any) => {
    //   return {
    //     url: `https://lfwfsydhhjsesngwfhka.supabase.in/storage/v1/object/public/public-bucket/own/${element.name}`,
    //     name: element.name,
    //   };
    // });
    this.imageService.setImageUrlArray(this.ImageUrlArray);
    // this.ownImageUrlArray = ownImage.map((element: any) => {
    //   return {
    //     url: `https://lfwfsydhhjsesngwfhka.supabase.in/storage/v1/object/public/public-bucket/own/${element.name}`,
    //     name: element.name,
    //   };
    // });
    this.imageService.setownImageUrlArray(this.ownImageUrlArray);
  }
}
