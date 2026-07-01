import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoData {
  title: string;
  description: string;
  keywords?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  updateSeo(data: SeoData): void {
    this.title.setTitle(data.title);

    this.meta.updateTag({
      name: 'description',
      content: data.description
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow'
    });

    if (data.keywords) {
      this.meta.updateTag({
        name: 'keywords',
        content: data.keywords
      });
    }
  }
}