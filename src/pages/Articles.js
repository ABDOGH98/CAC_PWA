import { createClient } from "contentful";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";

function Articles() {
	const [data, setData] = useState([]);
	useEffect(() => {
		// if (data.length === 0) {
		const client = createClient({
			space: process.env.REACT_APP_SPACE_ID,
			accessToken: process.env.REACT_APP_ACCESS_TOKEN,
		});
		client.getEntries("articles").then((res) => {
			setData(res.items);
		});
		// }
		// eslint-disable-next-line
	}, []);
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2">
				{data.map((itm) => (
					<Card key={itm.sys.id} id={itm.sys.id} field={itm.fields} />
				))}
			</div>
		</>
	);
}

export default Articles;
