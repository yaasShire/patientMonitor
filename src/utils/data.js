export const patients = [
    {
        patientId: 'PS11',
        name: "Ali Nuur Ahmed",
        age: 18,
        phoneNumber: '06137378',
        sex: 'Male',
        responsibles: 7
    },
    {
        patientId: 'P313',
        name: "Sadaam Nuur Ahmed",
        age: 25,
        phoneNumber: '06137278',
        sex: 'Female',
        responsibles: 9
    },
    {
        patientId: 'PW11',
        name: "Faarax Nuur Ahmed",
        age: 24,
        phoneNumber: '06437378',
        sex: 'Male',
        responsibles: 7
    },
    {
        patientId: 'PS31',
        name: "Sumayo Nuur Ahmed",
        age: 19,
        phoneNumber: '067387378',
        sex: 'Female',
        responsibles: 9
    },
    {
        patientId: 'PE11',
        name: "Yaxye Shukri Hilowle",
        age: 18,
        phoneNumber: '06137378',
        sex: 'Male',
        responsibles: 7
    },
    {
        patientId: 'PS41',
        name: "Faadumo Qaasim Ahmed",
        age: 35,
        phoneNumber: '06137378',
        sex: 'Female',
        responsibles: 7
    },
    {
        patientId: 'PT11',
        name: "Muniir Xasan Faarax",
        age: 26,
        phoneNumber: '06234378',
        sex: 'Male',
        responsibles: 7
    },
    {
        patientId: 'PT12',
        name: "Qamar Xasan Faarax",
        age: 26,
        phoneNumber: '06234378',
        sex: 'Male',
        responsibles: 7
    },
    {
        patientId: 'PT11',
        name: "Xudeyfi Xasan Faarax",
        age: 26,
        phoneNumber: '06234378',
        sex: 'Male',
        responsibles: 7
    },
    {
        patientId: 'PT11',
        name: "Sacdiya Xasan Faarax",
        age: 26,
        phoneNumber: '06234378',
        sex: 'Male',
        responsibles: 7
    },
    {
        patientId: 'PT11',
        name: "Jamila Xasan Faarax",
        age: 26,
        phoneNumber: '06234378',
        sex: 'Male',
        responsibles: 7
    },
    {
        patientId: 'PT11',
        name: "Jamaal Xasan Faarax",
        age: 26,
        phoneNumber: '06234378',
        sex: 'Male',
        responsibles: 7
    },
]



export const formDataGenerator = (values) => {
    const data = {}
    const keys = Object.keys(values).map(key => {
        data[key] = values[key]
    })
    return data;
}


export const ReportData = [
    {
        id: 1,
        label: "Heart Beat",
        quantity: 30
    },
    {
        id: 2,
        label: "Temperature",
        quantity: 80
    },
    {
        id: 3,
        label: "Room Temperature",
        quantity: 20
    },
    {
        id: 4,
        label: "Humidity",
        quantity: 90
    },
    {
        id: 5,
        label: "Oxygen",
        quantity: 60
    },
]