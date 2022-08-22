import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CritizenIdComponent } from './critizen-id.component';

describe('CritizenIdComponent', () => {
  let component: CritizenIdComponent;
  let fixture: ComponentFixture<CritizenIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CritizenIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CritizenIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
