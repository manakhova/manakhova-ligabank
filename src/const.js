import dayjs from 'dayjs';

export const MoneyType = {
  RUS: `RUS`,
  USD: `USD`,
  EUR: `EUR`,
  GBP: `GBP`,
  CNY: `CNY`
};

export const MAX_HISTORY_CONVERTATIONS = 10;

export const CURRENT_DATE = (new Date()).toISOString();

export const WEEK_AGO = 7 * 24 * 3600 * 1000;

export const calculateRates = (fromType, toType, quantity, rates) => {
  if (fromType === `RUS` && toType === `USD`) {
    return quantity / rates.USD;
  } else if (fromType === `RUS` && toType === `EUR`) {
    return quantity / rates.EUR;
  } else if (fromType === `RUS` && toType === `GBP`) {
    return quantity / rates.GBP;
  } else if (fromType === `RUS` && toType === `CNY`) {
    return quantity / rates.CNY;
  } else if (fromType === `USD` && toType === `RUS`) {
    return quantity * rates.USD;
  } else if (fromType === `USD` && toType === `EUR`) {
    return quantity * rates.USD / rates.EUR;
  } else if (fromType === `USD` && toType === `GBP`) {
    return quantity * rates.USD / rates.GBP;
  } else if (fromType === `USD` && toType === `CNY`) {
    return quantity * rates.USD / rates.CNY;
  } else if (fromType === `GBP` && toType === `RUS`) {
    return quantity * rates.GBP;
  } else if (fromType === `GBP` && toType === `USD`) {
    return quantity * rates.GBP / rates.USD;
  } else if (fromType === `GBP` && toType === `EUR`) {
    return quantity * rates.GBP / rates.EUR;
  } else if (fromType === `GBP` && toType === `CNY`) {
    return quantity * rates.GBP / rates.CNY;
  } else if (fromType === `CNY` && toType === `RUS`) {
    return quantity * rates.CNY;
  } else if (fromType === `CNY` && toType === `USD`) {
    return quantity * rates.CNY / rates.USD;
  } else if (fromType === `CNY` && toType === `EUR`) {
    return quantity * rates.CNY / rates.EUR;
  } else if (fromType === `CNY` && toType === `GBP`) {
    return quantity * rates.CNY / rates.GBP;
  } else if (fromType === `EUR` && toType === `RUS`) {
    return quantity * rates.EUR;
  } else if (fromType === `EUR` && toType === `USD`) {
    return quantity * rates.EUR / rates.USD;
  } else if (fromType === `EUR` && toType === `GBP`) {
    return quantity * rates.EUR / rates.GBP;
  } else if (fromType === `EUR` && toType === `CNY`) {
    return quantity * rates.EUR / rates.CNY;
  } else {
    return quantity;
  }
};
