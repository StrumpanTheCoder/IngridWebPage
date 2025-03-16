import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngridhomeComponent } from './ingridhome.component';

describe('IngridhomeComponent', () => {
  let component: IngridhomeComponent;
  let fixture: ComponentFixture<IngridhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngridhomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngridhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
