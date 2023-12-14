
let p = document.querySelector("p")

let input = document.querySelector("input")

const contacts = [

    { name: 'Cristiano', number: '(41) 987468206'},
    { name: 'Maria', number: '(41) 987468206' },
    { name: 'Tiano', number: '(41) 997468206' },
    { name: 'Cris', number: '(41) 986468206' },
    { name: 'Jose', number: '(41) 984468206' },
    { name: 'Lais', number: '(41) 983468206' },
]

function serch () {

    for (let i = 0; i < contacts.length; i++) {

        if (input.value.toLowerCase()=== contacts[i].name.toLowerCase()) {

             p.innerHTML = `Contato encontrado Nome: ${contacts[i].name} Tel: ${contacts[i].number}`

             break

        }  else {

            p.innerHTML = "Contato não encontrado"


        }

    }



}


