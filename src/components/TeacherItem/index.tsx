import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatarfiles.alphacoders.com/838/83899.jpg" alt="Aizen Sousuke"/>
                <div>
                    <strong>Aizen Sousuke</strong>
                    <span>Kidous</span>
                </div>
            </header>

            <p>
                A zanpakutou de Aizen possui punho verde com detalhes em bronze e lâmina prateada.
                <br/><br/>
                Sua Zanpakutou chama-se Kyouka Suigetsu, tem o poder da hipnose absoluta, controlando os cinco sentidos do adversário. Para ser pego, o adversário precisa ver a liberação da Zanpakutou, uma vez vista, é impossível escapar da ilusão. 
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;
