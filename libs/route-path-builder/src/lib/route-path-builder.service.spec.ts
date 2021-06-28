import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { RoutePathBuilderService } from './route-path-builder.service';

describe('RoutePathBuilderService', () => {
  let spectator: SpectatorService<RoutePathBuilderService>;
  const createService = createServiceFactory(RoutePathBuilderService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});