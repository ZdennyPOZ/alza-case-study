import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Location } from '@angular/common';
import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
  tick,
} from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroDetailComponent } from './hero-detail.component';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroDetailComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: ':id', component: HeroDetailComponent },
        ]),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();

    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Navigate to "/hero/" redirects you to homepage', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/');
    flush();
  }));

  it('Navigate to "/hero/10" redirects you to hero', fakeAsync(() => {
    router.navigate(['/10']);
    tick();
    expect(location.path()).toBe('/10');
    flush();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
