

import HomeIcon  from './icons/homeIcon'
import AboutIcon from './icons/aboutIcon'
import ResumeIcon from './icons/resumeIcon'
import ScheduleIcon from './icons/scheduleIcon'






export default function Sidebar() {
    return (
        <nav className="sidebar">
            <ul className="">
                <li>
                  <HomeIcon/>
                </li>
                <li>
                    <AboutIcon />
                </li>
                <li>
                    <ResumeIcon />
                </li>
                <li>
                    <ScheduleIcon />
                </li>
            </ul>
        </nav>
    )
}
