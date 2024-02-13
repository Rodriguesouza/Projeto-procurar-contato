
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

    for ( const contact of contacts) {

        if( input.value.toLowerCase() === contact.name.toLowerCase()) {

            p.innerHTML = ` Contato encontrado Nome: ${contact.name} Tel: ${contact.number}`

            break

        } else { 

            p.innerHTML = "Contato não encontrado tente novamente"
        }
    }
}

 







