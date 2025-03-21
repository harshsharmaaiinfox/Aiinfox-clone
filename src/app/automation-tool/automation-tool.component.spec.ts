import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationToolComponent } from './automation-tool.component';

describe('AutomationToolComponent', () => {
  let component: AutomationToolComponent;
  let fixture: ComponentFixture<AutomationToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomationToolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutomationToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
