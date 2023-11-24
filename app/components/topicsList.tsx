import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import {HiPencilAlt} from "react-icons/hi"

const getTopics = async() => {
    try {
        const res = await fetch('http://localhost:3000/api/topics',{
            cache: 'no-store',
        });

        if(!res.ok) {
            throw new Error("Failed to fetch topics");
        }

        return res.json()
    } catch(err) {
        console.log("Error loading topics: ", err)
    }
}

export default async function TopicsList() {

    const {topics} = await getTopics();
    
    return  (
        <>
        {topics.map((t: any) => (
    
            <div className="w-full p-4 border border-slate-300 my-3
            flex justify-between gap-5
            items-start" key = {t.id}>
                <div>
                    <h2 className="font-bold text-2xl">
                        {t.topicTitle}
                    </h2>
                    <div>
                        {t.topicDescription}
                    </div>
                </div>
                <div className="flex gap-2">
                    <RemoveBtn id={t.id}/>
                    <Link href={`/dashboard/editTopic/${t.id}`}>
                        <HiPencilAlt size={24} />
                    </Link>
                </div>
            </div>
            ))}
        </>
    )
}