
import myAxios from "./myAxios";

const announceDetailLoader = async ({ params }) => {
    try {
        const response = await myAxios.get(`/api/announce/${params.id}`);
        return response.data;
    } catch (error) {
        throw new Response("", { status: 405 });
    }
};

export default announceDetailLoader;

