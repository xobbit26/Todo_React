var moment = require('moment');

export const commonFormat = (value) => {
    return moment(value).format("DD.MM.YYYY, HH:mm");
}