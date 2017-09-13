import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSerchComponent } from './hero-serch.component';

describe('HeroSerchComponent', () => {
  let component: HeroSerchComponent;
  let fixture: ComponentFixture<HeroSerchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSerchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSerchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
