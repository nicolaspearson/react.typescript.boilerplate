import * as React from 'react';
import Hex from 'react-hexagon';

export interface HexagonProps {
	width?: any;
	fill?: any;
	opacity?: any;
	children?: any;
	style?: any;
	position?: any;
}

const Hexagon = (props: HexagonProps) => {
	let positionStyle = {};
	const element = (
		<Hex
			diagonal={props.width || 200}
			style={{
				stroke: 'none',
				opacity: props.opacity,
				fill: props.fill,
				...props.style
			}}
			flatTop={true}
		>
			{props.children}
		</Hex>
	);

	if (props.position) {
		positionStyle = {
			position: 'absolute',
			zIndex: 10,
			...props.position
		};
	}

	if (props.width) {
		return (
			<div
				style={{
					width: props.width,
					lineHeight: 0,
					...positionStyle
				}}
			>
				{element}
			</div>
		);
	}

	return element;
};

export default Hexagon;
