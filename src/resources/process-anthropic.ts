// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ProcessAnthropic extends APIResource {
  /**
   * Handle User Anthropic Request
   */
  retrieve(userID: number, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/process_anthropic/${userID}`, options);
  }
}

export type ProcessAnthropicRetrieveResponse = unknown

export declare namespace ProcessAnthropic {
  export {
    type ProcessAnthropicRetrieveResponse as ProcessAnthropicRetrieveResponse
  };
}
