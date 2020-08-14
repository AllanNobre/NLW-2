import React from 'react';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da Semana</label>
                        <input type="text" id="week_day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://static.wikia.nocookie.net/bleach/images/f/fa/230px-Aizen_Second_Transformation.png/revision/latest/scale-to-width-down/230?cb=20200318192535&path-prefix=pt" alt="Aizen Sousuke"/>
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
            </main>
        </div>
    )
}

export default TeacherList;