const factories = [
  { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
  { name: "BR2", employees: ["Jessie", "Karen", "John"] },
  { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
  { name: "BR4", employees: [] }
];

function count_employees(){
  const output=[];
  var fac_name,number;
  for(var i=0;i<factories.length;i++){
    fac_name=factories[i].name;
    number=factories[i].employees.length;
    output[i]={name: fac_name,count: number};
  }
  var str=JSON.stringify(output);
  //$(".que1").text(str);
  //console.log(str);
  return str;
}

function count_factory_num(){
  const output=[];
  const employee_list=[];
  const temp=[];
  var i=0;
  for(i=0;i<factories.length;i++){
    $.each(factories[i].employees,function(index,value){
      employee_list.push(value);
    })
    
  }
  var current_name;
  for(i=0;i<employee_list.length;i++){
    current_name=employee_list[i];
    temp[current_name]=(temp[current_name])?(temp[current_name]+1):1;
    
  }
  const employee_name=Object.keys(temp);
  const factory_num=Object.values(temp);
  for(i=0;i<Object.keys(temp).length;i++){
    output[i]={
      employee: employee_name[i],
      count: factory_num[i]
    };
  }
  //console.log(output);
  //$(".que2").text(JSON.stringify(output));
  var str=JSON.stringify(output);
  return str;
}

function order_employee_list(order_num){
  const output=[];
  
  for(var i=0;i<factories.length;i++){
    if(Object.is(factories[i].name, order_num)){
      output.push(factories[i]);
      output[0].employees.sort();
    }
  }
  //$(".que3").text(JSON.stringify(output[0]));
  //console.log(output);
  var str=JSON.stringify(output[0]);
  return str;
}

/////////
const employeeType = [
      {id: 1, "name": "FullTime", work_begin: "09:00:00", work_end: "17:00:00"},
      {id: 2, "name": "MidTime", work_begin: "12:00:00", work_end: "21:00:00"},
      {id: 3, "name": "HalfTime", work_begin: "20:00:00", work_end: "00:00:00"}
];

const employees = [
        {id: 1, name: "Alice", type: 2},
        {id: 2, name: "Bob", type: 3},
        {id: 3, name: "John", type: 2},
        {id: 4, name: "Karen", type: 1},
        {id: 5, name: "Miles", type: 3},
        {id: 6, name: "Henry", type: 1}
];

const tasks = [
      {id: 1, title: "task01", duration: 60},
      {id: 2, title: "task02", duration: 120},
      {id: 3, title: "task03", duration: 180},
      {id: 4, title: "task04", duration: 360},
      {id: 5, title: "task05", duration: 30},
      {id: 6, title: "task06", duration: 220},
      {id: 7, title: "task07", duration: 640},
      {id: 8, title: "task08", duration: 250},
      {id: 9, title: "task09", duration: 119},
      {id: 10, title: "task10", duration: 560},
      {id: 11, title: "task11", duration: 340},
      {id: 12, title: "task12", duration: 45},
      {id: 13, title: "task13", duration: 86},
      {id: 14, title: "task14", duration: 480},
      {id: 15, title: "task15", duration: 900}
];
function total_work_hour(){
  var total_min=0,total_hour=0;
  var working_time=[];
  var start,end;
  for(var i=0;i<employeeType.length;i++){
    start=new Date("1970-1-1 "+employeeType[i].work_begin);
    end=new Date("1970-1-1 "+employeeType[i].work_end);
    working_time[i]=Math.round((end-start)/1000/60/60,2)
    if(working_time[i]<0)
      working_time[i]+=24;
  }
  for(var i=0;i<employees.length;i++){
    total_hour+=working_time[employees[i].type-1];
  }
  //console.log(total_hour);
  return total_hour;
}

function howManyEmployeeByTime(time){
  var daytime=new Date("1970-1-1 "+time);
  var start,end;
  var is_working=[];
  var count=0;
  for(var i=0;i<employeeType.length;i++){
    start=new Date("1970-1-1 "+employeeType[i].work_begin);
    end=new Date("1970-1-1 "+employeeType[i].work_end);
    if(end<start){
      end.setDate(end.getDate()+1);
    }
    if(daytime>start && daytime<end)
      is_working[i]=true;
    else
      is_working[i]=false;
  }
  for(var i=0;i<employees.length;i++){
    if(is_working[employees[i].type-1])
      count++;
  }
  //console.log(count);
  return count;
}

function task_day(){
  var total_min=0;
  var daily_work_min=15*60;
  var task_days=0;
  for(var i=0;i<tasks.length;i++){
    total_min+=tasks[i].duration;
  }
  
  while(total_min>0){
    total_min-=daily_work_min;
    task_days++;
  }
  return task_days;
}

/////
$(document).ready(function(){
  var q1=count_employees();
  var q2=count_factory_num();
  var q3=order_employee_list("BR2");
  var q4=total_work_hour();
  var q5=howManyEmployeeByTime("19:00:00")
  var q6=task_day();
  console.log(q1);
  console.log(q2);
  console.log(q3);
  console.log(q4);
  console.log(q5);
  console.log(q6);
})