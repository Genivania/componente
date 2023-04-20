'use strict'
class card extends HTMLElement {
    constructor(){
        super()
        this.shadow = this.attachShadow({mode:'open'});
        this.nome = 'Nome Aluno'
        this.foto = null;
        this.cor = 'tomato';
        // const html = document.createElement('div')
        // const titulo = document.createElement('h1')
        // html.appendChild(titulo)
        // titulo.textContent = "SENAI - Jandira"
        // const css =  document.createElement('style')
        // css.textContent = `
        //     div{
        //         display: grid;
        //         place-items: center;
        //         width: 400px;
        //         height: 400px;
        //         background-color: tomato;
        //         color: white;
            
        //     }
        // `
        // shadow.append(html, css)
    }

    static get observedAttributes(){
        return ['nome', 'foto', 'cor']
    }

    // frutas = ['banana', 'uva']
    // if (frutas == 'banana') {
    //     console.log('vermelho')
    // }else if (frutas == 'uva'){
    //     console.log('azul')
    // }

    // frutas = {
    //     banana:'vermelho',
    //     uva: 'azul'
    // }
    // console.log(frutas['uva'])

    attributeChangedCallback(nameAttr, oldValue, newValue){
        this[nameAttr] = newValue
    }

    connectedCallback(){
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.style())
    }
    style(){
        const css = document.createElement('style')
        css.textContent= `
        *{
            padding:0;
            margin:0;
            box-sizing: border-box;
        }
        .card{
            width: 200px;
            height: 300px;
            display: grid;
            grid-template-rows: 20% 1fr 20%;
            place-items: center;
            background-color: ${this.cor};
            
        }
        .card__text{
            color: white;
            font-size:1.5rem;
            font-weight: 600;
        }
        .card__image{
            height: 100px;
            width: 100px;
            border-radius: 50%;
            background-color: #ffff;
            background-image: url(${this.foto});
            background-size: cover;
        }
        `
        return css 
    }
    component(){
        const card = document.createElement('div')
        card.classList.add('card')
        const nome = document.createElement('div')
        nome.classList.add('card__text')
        nome.textContent = this.nome
        const image = document.createElement('div')
        image.classList.add('card__image')
        const turma = document.createElement('div')
        turma.classList.add('card__text')
        turma.textContent = "DS2M"
        card.append(nome, image, turma)

        return card
        
    }
}

customElements.define('card-geni', card)