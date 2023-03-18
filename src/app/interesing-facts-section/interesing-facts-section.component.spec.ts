import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteresingFactsSectionComponent } from './interesing-facts-section.component';

describe('InteresingFactsSectionComponent', () => {
  let component: InteresingFactsSectionComponent;
  let fixture: ComponentFixture<InteresingFactsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteresingFactsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteresingFactsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
