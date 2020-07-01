export const isStringsEqual = (str1: string, str2: string)=>{
    return str1 === str2;
}

export const isLessThen10 =(number: number)=>{
    return number<10;
}

export const addZeroIfNeeded =(number: any)=>{
    if(isLessThen10(number)) 
    {
        number ='0'+ number;
    }
    return number;
}

export const getDateDisplay=(date: any)=>{
    let dd = addZeroIfNeeded(date.getDate());
    let mm = addZeroIfNeeded(date.getMonth()+1);
    let hour = addZeroIfNeeded(date.getHours());
    let minutes = addZeroIfNeeded(date.getMinutes());

    const formatedDay = dd + "/" + mm + "/"+ date.getFullYear();
    const formatedHour = hour + ":" + minutes;
    return formatedDay + " - " + formatedHour;
}

export const convertDateToClientFormat=(tasks :any)=>{
  for(let task of tasks){
    task.modify_date = getDateDisplay(new Date(task.modify_date));
    task.created = getDateDisplay(new Date(task.created));
  }
}

