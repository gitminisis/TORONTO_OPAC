import axios from "axios";
const BROWSE_CLUSTER = {
  title:
    "/FIRST?INDEXLIST&KEYNAME=TITLE&DATABASE=DESCRIPTION&form=[RHPL_WEB]includes/cluster.html&TITLE=Browse%20Title",
  author:
    "/FIRST?INDEXLIST&KEYNAME=ORIGINATOR&DATABASE=DESCRIPTION&form=[RHPL_WEB]includes/cluster.html&TITLE=Browse%20Creators",
  date:
    "/FIRST?INDEXLIST&KEYNAME=DATE_SEARCH&DATABASE=DESCRIPTION&form=[RHPL_WEB]includes/cluster.html&TITLE=Browse%20Date",
  collection:
    "/FIRST?INDEXLIST&KEYNAME=TAG&DATABASE=DESCRIPTION&form=[RHPL_WEB]includes/cluster.html&TITLE=Browse%20Collections"
};

export function getClusterUrl(session, field) {
  return session + BROWSE_CLUSTER[field.toLowerCase().trim()];
}

export function getClusterList(session, field) {
  return axios.get(getClusterUrl(session, field));
}

export function assignCluster(value, keyname) {}

export function getCluster(url, data) {
  return axios.post(url, data);
}

export function pageAction(url) {
  return axios.get(url);
}
