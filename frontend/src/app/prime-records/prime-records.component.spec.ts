import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeRecordsComponent } from './prime-records.component';

describe('PrimeRecordsComponent', () => {
  let component: PrimeRecordsComponent;
  let fixture: ComponentFixture<PrimeRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeRecordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
