import React, { useState } from "react";
import SelectUserItem from "./SelectUserItem";
import GroupName from "./GroupName";

const CreateGroup = () => {
  const [showGroupNameInput, setGroupNameInput] = useState(false);
  const [groupMemberIds, setGroupMemberIds] = useState([]);

  return showGroupNameInput ? (
    <GroupName groupMemberIds={groupMemberIds} />
  ) : (
    <SelectUserItem
      groupMemberIds={groupMemberIds}
      setGroupMemberIds={setGroupMemberIds}
      setGroupNameInput={setGroupNameInput}
    />
  );
};

export default CreateGroup;
