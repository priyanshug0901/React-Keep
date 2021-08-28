import "./card.css";
import React from "react";
import {
  AddAlertOutlined,
  ArchiveOutlined,
  ImageOutlined,
  MoreVertRounded,
  PaletteOutlined
} from "@material-ui/icons";
export default function Card() {
  return (
    <div className="card-main">
      <div className="card-title">Title</div>
      <div className="card-description">
        Hello, my name is priyanshu. Hello, my name is priyanshu. Hello, my name
        is priyanshu. Hello, my name is priyanshu.Hello, my name is
        priyanshu.Hello, my name is priyanshu.Hello, my name is priyanshu.Hello,
        my name is priyanshu.Hello, my name is priyanshu.how are you doing
      </div>

      <div className="card-icons-container">
        <AddAlertOutlined className="card-icons" />
        <ArchiveOutlined className="card-icons" />
        <ImageOutlined className="card-icons" />
        <PaletteOutlined className="card-icons" />
        <MoreVertRounded className="card-icons" />
      </div>
    </div>
  );
}
