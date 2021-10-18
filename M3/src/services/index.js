import X2JS from "../lib/xml2json.min";
import axios from "axios";

export const BASE_URL = 'https://toronto.minisisinc.com/'
// export const BASE_URL = 'http://m3opac.minisisinc.com/'
export const JSON_ARRAY_FIELD = [
  "report.item",
  "report.filters.div.xml.filter",
  "report.filters.div.xml.filter.item_group",
  "report.item.item_media",
  "report.item.item_object_name",
  "report.item.item_dimension",
  "report.item.item_maker",
  "report.item.item_material",
  "report.item.item_place",
];

export const DETAIL_JSON_ARRAY_FIELD = [
  "report.item.item_media",
  "report.item.item_object_name",
  "report.item.item_dimension",
  "report.item.item_maker",
  "report.item.item_material",
  "report.item.item_place",
];
export function xmlToJson(xml, arrayForm) {
  let xmlText = new XMLSerializer().serializeToString(xml);
  // console.log(xmlText);
  var x2js = new X2JS({
    arrayAccessFormPaths: arrayForm,
  });

  var jsonObj = x2js.xml_str2json(xmlText);
  // console.log(jsonObj);
  return jsonObj;
}

export function xmlStrToJson(xml, arrayForm) {
  var x2js = new X2JS({
    arrayAccessFormPaths: arrayForm,
  });
  var jsonObj = x2js.xml_str2json(xml);
  return jsonObj;
}

export function isGrid(data) {
  return data.grid_view === "#";
}

export function extractTopBarData(data) {
  return {
    grid: data.grid_view,
    list: data.list_view,
    keyword: data.search_statement,
    range: data.record_range,
    total: data.record_count,
    next: data.next_page ? data.next_page.a._href : "#",
    prev: data.prev_page ? data.prev_page.a._href : "#",
  };
}

export function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function downloadMedia(url) {
  axios({
    url: url, //your url
    method: "GET",
    responseType: "arraybuffer", // important
  })
    .then((response) => {
      let url;
      if (window.webkitURL) {
        url = window.webkitURL.createObjectURL(new Blob([response.data]));
      } else if (window.URL && window.URL.createObjectURL) {
        url = window.URL.createObjectURL(new Blob([response.data]));
      }
      const link = document.createElement("a");
      link.href = url;
      const fileName = response.headers["content-disposition"].split("=")[1];
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    })
    .catch((error) => {
      onError(error, errorHandler);
    });
}
