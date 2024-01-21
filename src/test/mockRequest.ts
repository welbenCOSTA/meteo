/* eslint-disable @typescript-eslint/no-explicit-any */
import { http, HttpResponse } from 'msw';
import { server } from './msw/server';
import { type METHODS } from './msw/const';

class MockRequest {
  mockrequest(
    endpoint: string,
    method: METHODS,
    status: number,
    response: any,
  ) {
    server.use(
      http[method.toLowerCase()](endpoint, () => {
        return HttpResponse.json(response, { status });
      }),
    );
  }
}

const mockRequest = new MockRequest();

export default mockRequest;
