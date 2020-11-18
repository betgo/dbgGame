import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HtmlTreeComponent } from './html-tree.component';

describe('HtmlTreeComponent', () => {
  let component: HtmlTreeComponent;
  let fixture: ComponentFixture<HtmlTreeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
