/**
 * Currency formatting.
 * Based on: https://docs.angularjs.org/api/ng/filter/currency
 */

import { formatNumber } from './number';
import { isUndefined } from './util';

export default function (amount, currencySymbol, fractionSize) {

    var formats = this.$locale.NUMBER_FORMATS;

    if (isUndefined(currencySymbol)) {
        currencySymbol = formats.CURRENCY_SYM;
    }

    if (isUndefined(fractionSize)) {
        fractionSize = formats.PATTERNS[1].maxFrac;
    }

    // if null or undefined pass it through
    return (amount == null) ? amount : formatNumber(amount, formats.PATTERNS[1], formats.GROUP_SEP, formats.DECIMAL_SEP, fractionSize).
    replace(/\u00A4/g, currencySymbol);
}
