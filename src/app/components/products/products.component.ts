import { Component, OnInit } from '@angular/core';
import { ApiProductService } from 'src/app/services/api-products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public produts: any;

  constructor(private api: ApiProductService) {}

  ngOnInit(): void {
    this.api.getProduct().subscribe((res) => {
      this.produts = res;
    });
  }
}
