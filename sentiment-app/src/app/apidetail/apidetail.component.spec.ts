import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApidetailComponent } from './apidetail.component';

describe('ApidetailComponent', () => {
  let component: ApidetailComponent;
  let fixture: ComponentFixture<ApidetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApidetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApidetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
