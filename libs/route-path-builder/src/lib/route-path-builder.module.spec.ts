import { async, TestBed } from '@angular/core/testing';
import { RoutePathBuilderModule } from './route-path-builder.module';

describe('RoutePathBuilderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RoutePathBuilderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(RoutePathBuilderModule).toBeDefined();
  });
});
