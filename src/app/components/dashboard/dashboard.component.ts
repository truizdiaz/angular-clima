import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  urlImagen = 'https://image.flaticon.com/icons/png/512/1116/1116453.png';
  ciudad = '';
  tempetura = 0;
  humedad = 0;
  clima = '';
  query = false;

  constructor(private _climaService: ClimaService) { }

  ngOnInit(): void {
  }

  obtenerClima() {
    this.query = false;

    this._climaService.getClima(this.ciudad).subscribe(data => {
      console.log(data);
      this.query = true;
      this.tempetura = data.main.temp - 273
      this.humedad = data.main.humidity
      this.clima = data.weather[0].main
    })
  }

}
