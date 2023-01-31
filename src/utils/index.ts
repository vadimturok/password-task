export const checkForInput = (str: string, callback: (value: {value: number, color: string, name: string}) => void) => {
    if(str === ''){
        callback({value: 0, color: '', name: ''})
    }else if(str.length < 8){
        callback({value: 0, color: 'backRed', name: ''})
    }else if(/^\d+$/.test(str) || /^[a-zA-Z]+$/.test(str) || /^[^a-zA-Z0-9]+$/.test(str)){
        callback({value: 1, color: 'red', name: 'Easy'})
    }else if(/^[A-Za-z0-9]*$/.test(str) || /^[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\d]*$/g.test(str)){
        callback({value: 2, color: 'yellow', name: 'Medium'})
    }
    else{
        callback({value: 3, color: 'green', name: 'Strong'})
    }
}