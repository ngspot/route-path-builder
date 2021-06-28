import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { RoutePathBuilderComponent } from './route-path-builder.component';

describe('RoutePathBuilderComponent', () => {
  let spectator: Spectator<RoutePathBuilderComponent>;
  const createComponent = createComponentFactory(RoutePathBuilderComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
