import axios from "axios";

export default function getUrl() {
  let subject = "Additional Clearance Request";
  let sessid = document.getElementById("session-id");
  let url = `${sessid}?save_mail_form&async=n&xml=y&subject_default=${subject}`;
  return url;
}
