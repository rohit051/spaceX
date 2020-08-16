import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  spaceXData: any = [];
  storespaceXData: any = [];
  filterYear: any = ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];
  isClicked = [];
  isLaunchClicked = [];
  isLandingClicked = [];
  year: any;
  successfulLaunch: Boolean;
  successfulLanding: Boolean;
  query: string = "";
  errorMessage: string;


  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.findQuery();
  }

  // to click on year data will filtered on render data
  onYearButtonClick(year, index) {
    this.isClicked = [];
    this.isClicked[index] = (this.isClicked[index] ? false : true);
    this.year = year;
    this.findQuery();
  }

  // on click on successful launch
  onlclickSuccessfulLaunch(value, index) {
    this.isLaunchClicked = [];
    this.isLaunchClicked[index] = (this.isLaunchClicked[index] ? false : true);
    this.successfulLaunch = value;
    this.findQuery();

  }
  // on click on successful landing
  onlclickSuccessfulLanding(value, index) {
    this.isLandingClicked = [];
    this.isLandingClicked[index] = (this.isLandingClicked[index] ? false : true);
    this.successfulLanding = value;
    this.findQuery();
  }
  // Query to for all spacex
  findQuery() {
    this.query = "";
    if (this.year != null) { this.query = this.query + `&launch_year=${this.year}` };
    if (this.successfulLaunch != null) { this.query = this.query + `&launch_success=${this.successfulLaunch}` };
    if (this.successfulLanding != null) { this.query = this.query + `&land_success=${this.successfulLanding}` };
    this.homeService.getSpaceX(this.query).subscribe((response) => {
      this.spaceXData = response;
    })
  }
}
