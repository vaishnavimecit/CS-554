import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import axios from 'axios';
const Shows = (props) => (
	<Layout>
		<h1>TV Shows</h1>
		<ul>
			{props.shows.map((show) => (
				<li key={show.id}>
					<Link as={`/show/${show.id}`} href={`/show?id=${show.id}`}>
						<a>{show.name}</a>
					</Link>
				</li>
			))}
			<style jsx>{`
				h1 {
					color: #1e8678;
				}
				li {
					list-style: none;
					margin: 5px 0;
				}

				a:hover {
					color: white;
					background-color: #1e8678;
					border: 1px solid black;
				}
				a {
					color: #1e8678;
					text-decoration: none;
					margin-right: 15px;
					padding: 5px;
				}
			`}</style>
		</ul>
	</Layout>
);

Shows.getInitialProps = async function() {
	const res = await axios.get('https://api.tvmaze.com/shows');
	const data = await res.data;

	console.log(`Show data fetched. Count: ${data.length}`);
	console.log(data);
	return {
		shows: data
	};
};

export default Shows;
