import React from "react";
import { MembersList } from "../components";
import { photo13 } from "../images";

function GroupPage() {
  return (
    <div className="group-page">
      <div class="container">
        <div class="row">
          <img class="hero-img m-0" src={photo13} alt="" />
          <h1>HOGWARTS</h1>
        </div>
        <div class="float-end col-lg-3">
          <MembersList />
        </div>
      </div>
    </div>
  );
}

export default GroupPage;
