import React from "react";
import CustomTitle from "../components/CustomTitle";
import { Formik, Form, Field, ErrorMessage } from "formik";
import HeadLogo from "../images/HeadLogo.svg";
import axios from "axios";
import { Icon } from "@iconify/react";
import successStandardLine from "@iconify/icons-clarity/success-standard-line";
import { Link } from "react-router-dom";




function ChangePassword({match}) {
    const changeId = match.params.changeId;
    return (
        <div className="change-password">
      <h1>Change Password In Progress</h1>
        </div>
    )
}

export default ChangePassword
