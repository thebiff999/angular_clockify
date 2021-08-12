import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { resolve } from 'dns';
import { ApiService } from '../api.service';
import { ENTRIES } from '../time-entries';
import { TimeEntryComponent } from '../time-entry/time-entry.component';
import { TimeService } from '../time.service';
import { User } from '../../../../api-server/src/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-time-list',
  templateUrl: './time-list.component.html',
  styleUrls: ['./time-list.component.scss']
  
})
export class TimeListComponent implements OnInit {

  constructor(
    private timeService: TimeService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  entries = ENTRIES;

  users: User[] | undefined;

  async getUsers() {
    this.users = await this.userService.getUsers();
    console.log(this.users![0]);
  }

}