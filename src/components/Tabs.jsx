import React, { useState } from 'react';
import "./Tabs.css"

function Tabs() {

	const [currentTab, setCurrentTab] = useState('1');

	const tabs = [
		{
			id: 1,
			tabTitle: 'servicios',
			title: 'CANACINTRA EN TEXAS',
			content: './juntas.png',
			heading: 'Mesas de Negocios',
			paragraph:'Importante al permitir que las empresas locales colaboren y compartan información para resolver problemas comunes y mejorar sus prácticas comerciales.',
			content2:'./e-learning.png',
			heading2: 'Educación',
			paragraph2:'Ofrece beneficios educativos a través de capacitaciones y programas de formación para mejorar las habilidades y conocimientos ',
			content3:'network.png',
			heading3: 'Networking',
			paragraph3:'Ofrece oportunidades de networking para las empresas locales, lo que puede ayudar a establecer conexiones comerciales valiosas y fomentar relaciones empresariales duraderas.',
		},
		{
			id: 2,
			tabTitle: 'Incubación Binacional',
			title: 'MODELO EXPORTADOR',
			content: 'event.png',
			heading: 'Agenda de negocios',
			paragraph:'La Agenda de Negocios CANACINTRA Texas es una iniciativa estratégica diseñada para fortalecer las relaciones comerciales entre México y Estados Unidos, fomentando el intercambio de ideas, oportunidades de inversión y la expansión de mercados.',
			content2:'incuba.png',
			heading2: 'Incubación Binacional',
			paragraph2:'Con apoyo de CICADE NETWORK para generar proyectos',
			content3:'eventoslocales.png',
			heading3: 'Eventos locales',
			paragraph3:'Organiza eventos locales que brindan a las empresas la oportunidad de conectarse con la comunidad empresarial local.',
		}
	];

	const handleTabClick = (e) => {
		setCurrentTab(e.target.id);
	}


	return (
		<div className='container'>
			<div className='tabs'>
				{tabs.map((tab, i) =>
					<button  className ='tabs__button' key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
				)}
			</div>
			<div className='content'>
				{tabs.map((tab, i) =>
					<div key={i}>
						{currentTab === `${tab.id}` && <div>
							<p className='title'>{tab.title}</p>
							<div className='tabs__container'>
								<div className='tabs__card'>
									<img src={tab.content} alt="image" />
									<h3>{tab.heading}</h3>
									<p>{tab.paragraph}</p>
								</div>
								<div className='tabs__card'>
									<img src={tab.content2} alt="image2" />
									<h3>{tab.heading2}</h3>
									<p>{tab.paragraph2}</p>
								</div>
								<div className='tabs__card'>
									<img src={tab.content3} alt="image3" />
									<h3>{tab.heading3}</h3>
									<p>{tab.paragraph3}</p>
								</div>
							</div>

							</div>}
					</div>
				)}
			</div>
		</div>
	)
}

export default Tabs;