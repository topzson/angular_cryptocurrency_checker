import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTable } from '@angular/material/table';
import { CoinListComponent } from './coin-list.component';

describe('CoinListComponent', () => {
  let component: CoinListComponent;
  let fixture: ComponentFixture<CoinListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinListComponent ],
      imports: [ MatTable ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
