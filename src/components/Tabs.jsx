import React, { useState } from 'react';
import "./Tabs.css"

function Tabs() {

	const [currentTab, setCurrentTab] = useState('1');

	const tabs = [
		{
			id: 1,
			tabTitle: 'Beneficios',
			title: 'Socios Benficios Activos',
			content: './juntas.png',
			heading: 'Juntas y Mesas de trabajo',
			paragraph:'Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry',
			content2:'./e-learning.png',
			heading2: 'Educacion',
			paragraph2:'Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry',
			content3:'network.png',
			heading3: 'Networking',
			paragraph3:'Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry',
		},
		{
			id: 2,
			tabTitle: 'Socios CANACINTRA',
			title: 'Title 2',
			content: 'Contenido de tab 2.'
		},
		{
			id: 3,
			tabTitle: 'Eventos',
			title: 'Title 3',
			content: 'Contenido de tab 3.'
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