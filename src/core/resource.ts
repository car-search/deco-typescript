// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Deco } from '../client';

export abstract class APIResource {
  protected _client: Deco;

  constructor(client: Deco) {
    this._client = client;
  }
}
