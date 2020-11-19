import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCanvasComponent } from './html-canvas.component';

describe('HtmlCanvasComponent', () => {
  let component: HtmlCanvasComponent;
  let fixture: ComponentFixture<HtmlCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlCanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
