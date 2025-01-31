import { techdocsBuildsExtensionPoint } from '@backstage/plugin-techdocs-backend';
import { createBackendModule } from '@backstage/backend-plugin-api';
import { transports } from 'winston';

export const techDocsExtension = createBackendModule({
  pluginId: 'techdocs',
  moduleId: 'techdocs-build-log-transport-extension',
  register(env) {
    env.registerInit({
      deps: {
        build: techdocsBuildsExtensionPoint,
      },
      async init({ build }) {
        // You can obviously use any custom transport here...
        build.setBuildLogTransport(new transports.Console());
      },
    });
  },
});
