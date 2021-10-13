import axios from "axios";

export function getClusterUrl(session, exp) {
  return `${session}/FIRST?INDEXLIST&KEYNAME=${exp.field}&DATABASE=COLLECTIONS&form=[COT_OPAC]m3/includes/cluster.html&TITLE=Browse%20${exp.title}`;
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
