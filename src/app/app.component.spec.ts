import { TestBed } from '@angular/core/testing';
import { MatAutocomplete } from '@angular/material';
import { AppComponent } from './app.component';
import { RouterTestingModule } from "@angular/router/testing";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MatAutocomplete
      ],
      imports:[
        RouterTestingModule.withRoutes([{ path: 'hero', loadChildren: () => import('./core/components/hero-detail/hero-detail.module').then(m => m.HeroDetailModule) }])
      ],
      teardown: {destroyAfterEach: false}
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
