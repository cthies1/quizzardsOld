import React from "react";
import { GroupBox } from "../components";
import Button from "react-bootstrap/Button";
import { photo13, photo14, photo15, photo16, photo17 } from "../images";

function Groups() {
  return (
    <div className="groups">
      <div class="container">
        <div class="row">
          <div class="col-lg-2"></div>
          <div class="col-lg-6 mt-5 mb-4">
            <Button variant="outline-primary" size="lg">
              Search Bar will go here
            </Button>{" "}
          </div>
          <div class="col-lg-3 mt-5 mb-4">
            <Button variant="outline-primary" size="lg">
              Create New Group +
            </Button>{" "}
          </div>
        </div>
        <hr />
        <div class="row align-items-center mt-5 mb-2">
          <h1 class="font-weight-bold col-lg-4">Suggested Groups</h1>
        </div>
        <div class="row pb-5">
          <div class="col-lg-3">
            <GroupBox link={photo13} groupName="Hogwarts" />
          </div>
          <div class="col-lg-3">
            <GroupBox link={photo14} groupName="Puppies" />
          </div>
          <div class="col-lg-3">
            <GroupBox link={photo15} groupName="Astronomy" />
          </div>
          <div class="col-lg-3">
            <GroupBox link={photo16} groupName="Candy" />
          </div>
        </div>
        <div class="row pb-5">
          <div class="col-lg-3">
            <GroupBox link={photo17} groupName="Books" />
          </div>
          <div class="col-lg-3">
            <GroupBox link={photo13} groupName="Hogwarts" />
          </div>
          <div class="col-lg-3">
            <GroupBox link={photo14} groupName="Puppies" />
          </div>
          <div class="col-lg-3">
            <GroupBox link={photo15} groupName="Astronomy" />
          </div>
        </div>
        <div class="row pb-5">
          <div class="col-lg-3">
            <GroupBox link={photo16} groupName="Candy" />
          </div>
          <div class="col-lg-3">
            <GroupBox link={photo17} groupName="Books" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Groups;
