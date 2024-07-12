import React from "react";
import "./admin.scss";

import AdminLayout from "@/components/admin-layout/AdminLayout";

const LayoutAdmin = ({ children }) => {
  return (
    <div className="admin">
      <div>
        <AdminLayout />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default LayoutAdmin;
