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
    const dateTime = new Date();
    const time = dateTime.toLocaleTimeString();
    const date = dateTime.toLocaleDateString();
    let dateTimeData = [`${date}, ${time}`, ...dataToBeLogged];
    return super.log(...dateTimeData);
  }
}
