let employees = [
    {
      id: 1,
      first_name: "Sourav",
      last_name: "Paul",
      email: "Sourav@gmail.com",
      gender: "Male",
      ip_address: "160.192.178.21",
    },
  
    {
      id: 2,
      first_name: "Pavan",
      last_name: "Bhosle",
      email: "pavan@gmail.com",
      gender: "Male",
      ip_address: "160.192.177.22",
    },
  
    {
      id: 3,
      first_name: "Tushar",
      last_name: "Mali",
      email: "Tushar@gmail.com",
      gender: "Male",
      ip_address: "160.192.178.21",
    },
  
    {
      id: 4,
      first_name: "Sangeetha",
      last_name: "Paul",
      email: "sangeetha@gmail.com",
      gender: "Female",
      ip_address: "170.192.178.21",
    },
  
    {
      id: 5,
      first_name: "Pavni",
      last_name: "Dhillon",
      email: "pavni@gmail.com",
      gender: "Female",
      ip_address: "190.172.158.21",
    },
  
    {
      id: 6,
      first_name: "Ramya",
      last_name: "Maram",
      email: "Ramya@gmail.com",
      gender: "Female",
      ip_address: "190.182.158.21",
    },
  ];

// aLL THE EMPLOYEES
let allempbutton = document.querySelector("#all-emp-button");
allempbutton.addEventListener("click",function(){
    displayemployees(employees);
})

// Male employee data

let maleempbutton = document.querySelector("#male-emp-button");
maleempbutton.addEventListener("click",function(){
   let maleEmployee = employees.filter(function(employee){
        return employee.gender ==="Male";

    });
    displayemployees(maleEmployee);
})

//female employee data
let femaleempbutton = document.querySelector("#female-emp-button");
femaleempbutton.addEventListener("click",function(){
   let femaleEmployee = employees.filter(function(employee){
        return employee.gender ==="Female";

    });
    displayemployees(femaleEmployee);

})


// to search data 
let search = document.querySelector(".input-field");
search.addEventListener("keyup",function(){
  let textentered = search.value;
 
  let filteredemployee =[];
  if(textentered!==""){
    filteredemployee = employees.filter(function(employee){
      return employee.first_name.toUpperCase().startsWith(textentered.toUpperCase());

    });
    document.querySelector("#table-body").innerHTML ="";
    displayemployees(filteredemployee);
  }
  else{
    document.querySelector("#table-body").innerHTML = "";
  }
});


// displaying the data 
 
let displayemployees = (employees)=>{
    let tablebody = document.querySelector("#table-body");
    let tableRow="";
    for(let employee of employees){
        tableRow += `<tr>
                    <td>${employee.id}</td>
                    <td>${employee.first_name}</td>
                    <td>${employee.last_name}</td>
                    <td>${employee.email}</td>
                    <td>${employee.gender}</td>
                    <td>${employee.ip_address}</td>
                  
        </tr>`;
        tablebody.innerHTML=tableRow;
    }
}


