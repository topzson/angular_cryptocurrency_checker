import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit{

  bannerData: any=[];
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['symbol', 'current_price','price_change_percentage_24h','market_cap'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private api : ApiService, private router: Router) {}

  ngOnInit(): void {
      this.getAllData();
      this.getBannerData();
  }
  getBannerData(){
    this.api.getTrendingCurrency("THB").subscribe(res=>{
      console.log(res);
      this.bannerData = res;
    })
  }

  getAllData(){
    this.api.getCurrency("THB").subscribe(res=>{
      console.log(res);
      this.dataSource = new MatTableDataSource<any>(res);
      this.dataSource.sort = this.sort;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  gotoDetails(row: any){
    this.router.navigate(['coin-detail',row.id]);
    
  }
}
