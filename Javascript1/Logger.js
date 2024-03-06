class BaseLogger {
    SimpleLogToConsole(dataToBeLogged){
        console.log(dataToBeLogged)
    }
}

class TableLogger extends BaseLogger {

    TableLogToConsole(...dataToBeLogged){
        return super.SimpleLogToConsole(dataToBeLogged.join(" | "))
    }
}

class DateTimeLogger extends TableLogger {

    constructor(){
        super()
        this.dateTime = new Date()
    }
    
    getDate() {
        return this.dateTime.toLocaleDateString()
    }

    getTime() {
        return this.dateTime.toLocaleTimeString()
    }

    DateTimeLogToConsole(...dataToBeLogged){
        this.dateTime = new Date()
        let time = this.getTime()
        let date = this.getDate()
        let dateTimeData = [`${date}, ${time}`, ...dataToBeLogged];
        return super.TableLogToConsole(...dateTimeData)
    }
}
