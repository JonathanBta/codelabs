import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = "http://localhost:3000/locations";

  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const response = await fetch(this.url);
    return (await response.json()) ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const response = await fetch(`${this.url}/${id}`);
    return (await response.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string): void {
    console.log(`Application submitted for ${firstName} ${lastName} (${email})`);
  }
}
