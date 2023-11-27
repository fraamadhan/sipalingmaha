import { headers } from "next/headers";

export const getTopics = async () => {

    try {
        const res = await fetch("http://localhost:3000/api/topics-user/", {
            method: "GET",
            headers: new Headers(headers()),
            cache: 'no-store',
        });

        const responseData = await res.json();

        if (!res.ok) {
            throw new Error("Failed to fetch topics");
        }

        return responseData;
    } catch (err) {
        console.log("Error loading topics: ", err);
    }
};
