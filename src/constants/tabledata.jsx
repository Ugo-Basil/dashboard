import { AiOutlineCloudDownload } from "react-icons/ai";
import avatars from "../assets/Avatars.png";
import avatar1 from "../assets/userAvatar.png";
import avatar2 from "../assets/userAvatar1.png";

const data = [
  {
    id: 1,
    invoice: "Basic Plan – Dec 2022",
    amount: "USD $100.00",
    date: "Dec 1, 2022",
    status: "Paid",
    usersOnPlan: avatars,
    action: <AiOutlineCloudDownload size={24} />,
  },
  {
    id: 2,
    invoice: "Basic Plan – Nov 2022",
    amount: " USD $75.50",
    date: "Nov 1, 2022",
    status: "Pending",
    usersOnPlan: avatar1,
    action: <AiOutlineCloudDownload size={24} />,
  },
  {
    id: 3,
    invoice: "Basic Plan – Oct 2022",
    amount: "USD $200.00",
    date: "Oct 1, 2022",
    status: "Paid",
    usersOnPlan: avatar2,
    action: <AiOutlineCloudDownload size={24} />,
  },
  {
    id: 4,
    invoice: "Basic Plan – Sep 2022",
    amount: "USD $50.00",
    date: "Sept 1, 2022",
    status: "Pending",
    usersOnPlan: avatars,
    action: <AiOutlineCloudDownload size={24} />,
  },
  {
    id: 5,
    invoice: "Basic Plan – Aug 2022",
    amount: "USD $120.00",
    date: "Aug 1, 2022",
    status: "Paid",
    usersOnPlan: avatar1,
    action: <AiOutlineCloudDownload size={24} />,
  },
  {
    id: 6,
    invoice: "Basic Plan – Jul 2022",
    amount: "USD $120.00",
    date: "Jul 1, 2022",
    status: "Paid",
    usersOnPlan: avatar2,
    action: <AiOutlineCloudDownload size={24} />,
  },
  {
    id: 7,
    invoice: "Basic Plan – Jun 2022",
    amount: "USD $120.00",
    date: "Jun 1, 2022",
    status: "Paid",
    usersOnPlan: avatars,
    action: <AiOutlineCloudDownload size={24} />,
  },
];

export default data;
