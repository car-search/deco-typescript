// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Process extends APIResource {
  /**
   * Handle User Request
   */
  retrieve(userID: number, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/process/${userID}`, options);
  }

  /**
   * Handle User Anthropic Request
   */
  retrieveAnthropic(userID: number, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/process_anthropic/${userID}`, options);
  }
}

export type ProcessRetrieveResponse = unknown;

export type ProcessRetrieveAnthropicResponse = unknown;

export declare namespace Process {
  export {
    type ProcessRetrieveResponse as ProcessRetrieveResponse,
    type ProcessRetrieveAnthropicResponse as ProcessRetrieveAnthropicResponse,
  };
}
