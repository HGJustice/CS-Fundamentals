class BaseLogger {
  log(dataToBeLogged) {
    console.log(dataToBeLogged);
  }
}

class TableLogger extends BaseLogger {
  log(...dataToBeLogged) {
    return super.log(dataToBeLogged.join(" | "));
  }
}

class DateTimeLogger extends TableLogger {
  log(...dataToBeLogged) {
    this.dateTime = new Date();
    let time = this.dateTime.toLocaleTimeString();
    let date = this.dateTime.toLocaleDateString();
    let dateTimeData = [`${date}, ${time}`, ...dataToBeLogged];
    return super.log(...dateTimeData);
  }
}
