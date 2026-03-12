// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AnthropicAPI from './anthropic';
import { Anthropic, AnthropicRetrieveResponse } from './anthropic';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Process extends APIResource {
  anthropic: AnthropicAPI.Anthropic = new AnthropicAPI.Anthropic(this._client);

  /**
   * Handle User Request
   */
  retrieve(userID: number, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/process/${userID}`, options);
  }
}

export type ProcessRetrieveResponse = unknown;

Process.Anthropic = Anthropic;

export declare namespace Process {
  export { type ProcessRetrieveResponse as ProcessRetrieveResponse };

  export { Anthropic as Anthropic, type AnthropicRetrieveResponse as AnthropicRetrieveResponse };
}
