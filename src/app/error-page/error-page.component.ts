import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.errorMessage = this.route.snapshot.data['message'];
    // code above and below both access the error message in the app-routing.mod
    // below makes it more dynamic if the error message were to ever change
    this.route.data.subscribe(
      (data: Data)=>{
        this.errorMessage = data['message'];
      }
    )
  }

}
