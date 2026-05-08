import Link from "next/link";
import Image from "next/image";
import {EventItem} from "@/lib/constants";

const EventCard = ({title, image, slug, location, date, time}: EventItem) => {
    return (
        <Link href={`/events/${slug}`} id="event-card">
            <Image src={image} alt={title} width={410} height={300} className="poster" />

            <div className="flex flex-row gap-2">
                <p>{location}</p>
            </div>

            <p className="title">{title}</p>
        </Link>
    )
}
export default EventCard
