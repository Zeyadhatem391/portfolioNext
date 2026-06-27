import { Contact } from "@/types/contact";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "@/assets/icons/icons";

export const Contacts: Contact[] = [
    { id: 1, Icon: FaPhone, title: "Phone", info: "+20 111 207 9724" },
    { id: 2, Icon: FaEnvelope, title: "Email", info: "zeyadhatemsabry@gmail.com" },
    {
        id: 3,
        Icon: FaMapMarkerAlt,
        title: "Location",
        info: "Mansoura, Egypt",
    },
]