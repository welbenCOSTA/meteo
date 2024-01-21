import { endpoints } from './endpoint';
import { ForecastsService } from './service';
import { keys } from './key';
import * as types from './types';

const forecastsService = new ForecastsService();

export { endpoints, forecastsService, keys, types };
