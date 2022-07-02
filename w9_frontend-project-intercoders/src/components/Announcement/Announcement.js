import React from "react";
import "./Announcement.css";
import AnnouncementList from "../AnnouncementList/AnnouncementList";

//Rendering the main container for the Announcements
function Announcement() {
  return (
    <div className="Main--container">
      <h2>ANNOUNCEMENTS</h2>
      <AnnouncementList />
    </div>
  );
}

export default Announcement;
