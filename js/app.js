class Form {
    constructor(name, email, subject){
        this.name = name
        this.email = email
        this.subject = subject
    }

    validateForm(){
        for(let i in this){
            if(this[i] == undefined || this[i] == '' || this[i] == null){
                return false
            }
        }
        return true
    }
}

class Bd {

    constructor(){
        let id = localStorage.getItem('id')

        if (id === null){
            localStorage.setItem('id', 0)
        }
    }

    getNextId(){
        let nextId = localStorage.getItem('id')
        return parseInt(nextId) + 1
    }

    recordForm(form){
        let id = this.getNextId()
        localStorage.setItem(id, JSON.stringify(form))
        localStorage.setItem('id', id)
    }
}

let bd = new Bd()

function saveForm() {
    let name = document.getElementById('name')
    let email = document.getElementById('email')
    let subject = document.getElementById('subject')

    let form = new Form(name.value, email.value, subject.value)

    if(form.validateForm()){
        bd.recordForm(form)
        let modal = document.getElementById('modal')
        let close = document.getElementById('close')  

        modal.style.display = "block"
        close.onclick = () => {
            modal.style.display = 'none'
        }
        
    }else{
        alert('Preencha os dados corretamente')
    }
    
}

// Modal Configurations
function modal(){
    
}