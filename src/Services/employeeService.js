const KEYS = {
    employees: 'employees',
    employeeId: 'employeeId'
}
export const getDepartmentCollections = () => ([
    {id: '1', title:'Development'},
    {id: '2', title:'Marketing'},
    {id: '3', title:'Accounting'},
    {id: '4', title:'HR'},
])

export const insertEmployee = (data) => {
    data["id"] = generateEmployeeId();
    let employees = getAllEmployees();
    employees.push(data);
    localStorage.setItem(KEYS.employees, JSON.stringify(employees))
}

export const generateEmployeeId = () =>{
    if(localStorage.getItem(KEYS.employees) === null)
        localStorage.setItem(KEYS.employeeId, "0");
    var id = parseInt(localStorage.getItem(KEYS.employeeId))
    localStorage.setItem(KEYS.employeeId, (++id).toString())
    return id
}

export const getAllEmployees = () => {
    if(localStorage.getItem(KEYS.employees) === null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]));
    let employees = JSON.parse(localStorage.getItem(KEYS.employees))
    let departments = getDepartmentCollections();
    return employees.map(x => ({
        ...x,
        department: departments[x.departmentId - 1].title
    }))
    
}