import React from 'react';
import Card from '../components/Card';

const CardList = ({ robots }) => {
	// if (true) {
	// 	throw new Error('Nooo!');
	// }
	// const cardsArray = robots.map((user, index) => {
	// 	return (
	// 		<Card
	// 			key={index}
	// 			id={robots[index].id}
	// 			name={robots[index].name}
	// 			email={robots[index].email}
	// 		/>
	// 	);
	// });
	// return <div>{cardsArray}</div>;
	return (
		<div>
			{robots.map((user, index) => {
				return (
					<Card
						key={index}
						id={robots[index].id}
						name={robots[index].name}
						email={robots[index].email}
					/>
				);
			})}
		</div>
	);
};

export default CardList;
