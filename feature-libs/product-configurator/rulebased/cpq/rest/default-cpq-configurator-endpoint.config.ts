/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { CpqConfiguratorEndpointConfig } from './cpq-configurator-endpoint.config';

export const defaultCpqConfiguratorEndpointConfig: CpqConfiguratorEndpointConfig =
  {
    backend: {
      cpq: {
        endpoints: {
          configurationInit: 'configurations',
          configurationDisplay: 'configurations/${configId}/display',
          attributeUpdate:
            'configurations/${configId}/attributes/${attributeCode}',
          valueUpdate:
            'configurations/${configId}/attributes/${attributeCode}/attributeValues/${valueCode}',
        },
        prefix: '/api/configuration/v1/',
      },
    },
  };
