export const UpdateDynamicFormData = (payload) =>{
    console.log("2...",payload)
    let UpdateDynamicFormData;
    if(payload){
        UpdateDynamicFormData = payload;
        sessionStorage.setItem('dynamicData', JSON.stringify(payload))
    }
    else{
        if(sessionStorage.dynamicData){
            UpdateDynamicFormData = JSON.parse(sessionStorage.dynamicData)
        }
    }
    console.log("13..",UpdateDynamicFormData)
    return UpdateDynamicFormData;
}