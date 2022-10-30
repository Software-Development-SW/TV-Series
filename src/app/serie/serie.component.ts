import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  public series: Array<Serie> = [];
  public average = 0;
  constructor(private serieService: SerieService) { }
  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    });
  }
  setAverage(){
    var count = 1;
    var sum  = 0;
    this.series.forEach(element => {
      sum += element.id;
      console.log(this.average);
      count += 1;
    });
    this.average = sum/count;
    this.average = 6;
  }

  ngOnInit() {
    this.getSeries();
    this.setAverage();
  }

}
