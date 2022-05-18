/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    debugger
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


function createEmployeeRecord(arr){
    let Obj ={
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return Obj
}

function createEmployeeRecords(nestedArr){
    return nestedArr.map(createEmployeeRecord)
}


function createTimeInEvent(date){
    let Obj ={
        type: "TimeIn",
        hour: Number(date.substr(date.length - 4)),
        date: date.slice(0,10)
    }
    this.timeInEvents.push(Obj)
    return this
}

function createTimeOutEvent(date){
    let Obj = {
        type: "TimeOut",
        hour: Number(date.substr(date.length - 4)),
        date: date.slice(0,10)
    }
    this.timeOutEvents.push(Obj);
    return this
}

// function hoursWorkedOnDate(mydate){
//     let In,Out;
//     debugger
//     for (let i = 0; i < this.timeInEvents.length; i++) {
//         if (this.timeInEvents[i].date === mydate) {
//             In = this.timeInEvents[i].hour
//         }
//     for (let i = 0; i< this.timeOutEvents.length; i++) {
//       if (this.timeOutEvents[i].date === mydate) {
//           Out = this.timeOutEvents[i].hour
//       }
//     }    
//   }
//   return (Out - In)/100
// }


function hoursWorkedOnDate(date){
    const In = this.timeInEvents.find(day=> date === day.date)
    const Out = this.timeOutEvents.find( day => date === day.date)
    return (Out.hour - In.hour)/100
}

function wagesEarnedOnDate(date){
    return this.payPerHour*hoursWorkedOnDate.call(this,date)
}

function findEmployeeByFirstName(srcArray,firstName){
return srcArray.find(record => record.firstName === firstName)
}

function calculatePayroll(arr){
 //return arr.reduce(a,b => allWagesFor.call(arr[i]))
 let sum=0
 for (let index = 0; index < arr.length; index++) {
     const element = arr[index];
     sum =allWagesFor.call(arr[index]) + sum
    //  debugger
 }
 return sum
}
// const csvDataEmployees = [
//     ["Thor", "Odinsson", "Electrical Engineer", 45],
//     ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
//     ["Natalia", "Romanov", "CEO", 150],
//     ["Darcey", "Lewis", "Intern", 15],
//     ["Jarvis", "Stark", "CIO", 125],
//     ["Anthony", "Stark", "Angel Investor", 300]
//   ]

//   const csvTimesIn = [
//     ["Thor", ["2018-01-01 0800", "2018-01-02 0800", "2018-01-03 0800"]],
//     ["Loki", ["2018-01-01 0700", "2018-01-02 0700", "2018-01-03 0600"]],
//     ["Natalia", ["2018-01-03 1700", "2018-01-05 1800", "2018-01-03 1300"]],
//     ["Darcey", ["2018-01-01 0700", "2018-01-02 0800", "2018-01-03 0800"]],
//     ["Jarvis", ["2018-01-01 0500", "2018-01-02 0500", "2018-01-03 0500"]],
//     ["Anthony", ["2018-01-01 1400", "2018-01-02 1400", "2018-01-03 1400"]]
//   ]

//   const csvTimesOut = [
//     ["Thor", ["2018-01-01 1600", "2018-01-02 1800", "2018-01-03 1800"]],
//     ["Loki", ["2018-01-01 1700", "2018-01-02 1800", "2018-01-03 1800"]],
//     ["Natalia", ["2018-01-03 2300", "2018-01-05 2300", "2018-01-03 2300"]],
//     ["Darcey", ["2018-01-01 1300", "2018-01-02 1300", "2018-01-03 1300"]],
//     ["Jarvis", ["2018-01-01 1800", "2018-01-02 1800", "2018-01-03 1800"]],
//     ["Anthony", ["2018-01-01 1600", "2018-01-02 1600", "2018-01-03 1600"]]
//   ]
//   let employeeRecords = createEmployeeRecords(csvDataEmployees)
//   employeeRecords.forEach(function (rec) {
//     let timesInRecordRow = csvTimesIn.find(function (row) {
//       return rec.firstName === row[0]
//     })

//     let timesOutRecordRow = csvTimesOut.find(function (row) {
//       return rec.firstName === row[0]
//     })

//     timesInRecordRow[1].forEach(function(timeInStamp){
//       createTimeInEvent.call(rec, timeInStamp)
//     })

//     timesOutRecordRow[1].forEach(function(timeOutStamp){
//       createTimeOutEvent.call(rec, timeOutStamp)
//     })
//   }) 
//   calculatePayroll(employeeRecords)