import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResults: Object;
  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: ServiceService) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      selection: new FormControl(),
      searchValue: new FormControl()
    });
  }

  onSubmit() {
    this.service.getResults(this.searchForm.value.selection, this.searchForm.value.searchValue).subscribe(data => {
      this.searchResults = data;=
    });
  }

}