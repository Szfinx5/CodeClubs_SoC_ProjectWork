import React from "react";
import './Announcement.css'
import AnnouncementList from "../AnnouncementList/AnnouncementList";
import Categories from "../Categories/Categories";

function Announcement(props,{topic}) {
    console.log("props de announcemnt", props)
    return(
        <div className="Main--container">
           <h2>
                ANNOUNCEMENTS
            </h2>
          <AnnouncementList/>
        </div>
    
    )
    
}

export default Announcement;