import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../time-entry';

@Component({
  selector: 'app-time-entry',
  templateUrl: './time-entry.component.html',
  styleUrls: ['./time-entry.component.scss']
})

export class TimeEntryComponent implements OnInit {

  @Input() entry!: Entry;
  
  constructor() { }

  ngOnInit(): void {
    var start = new Date(this.entry.start);
    var end = new Date(this.entry.end);
    this.entry.start = new Date(start).toLocaleTimeString();
    this.entry.end = new Date(end).toLocaleTimeString();
    var date = start.toLocaleDateString();
    var weekday = this.getDayofWeek(start.getDay());
    this.entry.date = date;
    this.entry.weekday = weekday;
    this.entry.duration = end.getTime() - start.getTime();
  }

  getDayofWeek(param: number): string {
    switch(param) {
      case 0:
        return "So";
      case 1:
        return "Mo";
      case 2:
        return "Di";
      case 3:
        return "Mi";
      case 4:
        return "Do";
      case 5:
        return "Fr";
      case 6:
        return "Sa";
    }
    return "Fehler";
  }


}
