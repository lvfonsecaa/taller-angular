import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  imports: [CommonModule],
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Array<Serie> = []
  constructor(private serieService: SerieService) { }

  getSeries(): void
  {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
    });
  }

  ngOnInit() 
  {
    this.getSeries();
  }

  selectedSerie: Serie | null = null;

  selectSerie(serie: Serie) {
    this.selectedSerie = serie;
  }

  promedio (serie:Serie):number
  {
    let suma = 0;
    let numeroSeries = 0;
    for (let i = 0; i < this.series.length; i++) {
        suma += this.series[i].seasons;
        numeroSeries++;
    }
    return suma/numeroSeries;

  }

}
