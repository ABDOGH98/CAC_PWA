import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function PubBody() {
	const { id } = useParams();
	const [data, setData] = useState(null);
	useEffect(() => {
		if (!data) {
			const client = createClient({
				space: process.env.REACT_APP_SPACE_ID,
				accessToken: process.env.REACT_APP_ACCESS_TOKEN,
			});
			client.getEntry(id).then((res) => {
				setData(res);
			});
		}
		return () => {}; // eslint-disable-next-line
	});
	if (!data) {
		return <div className="relative top-28">Loading...</div>;
	}
	return (
		<>
			<div className="relative top-28">
				<div className=" w-full px-1 sm:px-5 md:px-36 lg:px-80 ">
					<img
						src={"https:" + data.fields.cardeImg.fields.file.url}
						alt={"https:" + data.fields.cardeImg.fields.title}
						width="400"
						height="300"
						className="w-full md:h-96 object-cover"
					/>
				</div>
				<div className="px-1 sm:px-5 md:px-36 lg:px-80 pt-3 text-lg text-justify break-words">
					{documentToReactComponents(data.fields.actusBody)}
				</div>
			</div>
		</>
	);
}

export default PubBody;
