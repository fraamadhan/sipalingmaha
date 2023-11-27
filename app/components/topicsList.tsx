import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import {HiPencilAlt} from "react-icons/hi"
import { getTopics } from "./getTopics";

export default async function TopicsList() {

    const {topic} = await getTopics();
    
    return  (
        <>
        {topic.map((t: any) => (
    
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
