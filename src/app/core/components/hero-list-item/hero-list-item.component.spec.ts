import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListItemComponent } from './hero-list-item.component';

describe('HeroListItemComponent', () => {
  let component: HeroListItemComponent;
  let fixture: ComponentFixture<HeroListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroListItemComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
