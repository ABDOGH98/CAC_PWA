import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { createClient } from "contentful";

function Actus() {
	const [data, setData] = useState([]);
	useEffect(() => {
		const client = createClient({
			space: process.env.REACT_APP_SPACE_ID,
			accessToken: process.env.REACT_APP_ACCESS_TOKEN,
		});
		client.getEntries("actus").then((res) => {
			setData(res.items);
		});
	}, []);
	const cards = data.map((itm) => {
		return <Card key={itm.sys.id} id={itm.sys.id} field={itm.fields} />;
	});
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2">{cards}</div>
		</>
	);
}

export default Actus;
