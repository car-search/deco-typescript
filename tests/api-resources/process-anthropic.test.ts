// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Deco from '@car-search/decod';

const client = new Deco({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource processAnthropic', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.processAnthropic.retrieve(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
