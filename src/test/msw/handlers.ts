import { HttpResponse, http } from 'msw';
import responseMock from '../mocks/responseMock';
import { TEST_URL } from './const';

export const handlers = [
  http.get(TEST_URL, () =>
    HttpResponse.json(responseMock.data, { status: 200 }),
  ),
];
