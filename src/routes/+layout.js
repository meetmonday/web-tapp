export const ssr = false;

export const load = ({ params }) => {
	return {
		slug: params.slug
	};
};
