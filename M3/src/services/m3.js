export function extractData(item) {
  return {
    item_link: item.item_link,
    media: item.item_media ? item.item_media : [],
    dimension: item.item_dimension ? item.item_dimension : [],
    data: {
      item_sisn: {
        title: "SISN",
        type: "string",
        value: item.item_sisn,
      },
      item_refd: {
        title: "Accession Number",
        type: "string",
        value: item.item_refd,
      },
      item_title: {
        title: "Title",
        type: "string",
        value: item.item_title,
      },
      item_object_name: {
        title: "Object Name",
        type: "array",
        value: item.item_object_name,
      },
      item_alt_object_name: {
        title: "Additional Object Name",
        type: "array",
        value:
          item.item_object_name.length > 1
            ? item.item_object_name.filter((e, i) => i !== 0)
            : null,
      },
      item_date: {
        title: "Date",
        type: "string",
        value: item.item_date,
      },
      item_site: {
        title: "Site",
        type: "string",
        value: item.item_site,
      },
      item_collection: {
        title: "Collection",
        type: "link",
        value: item.item_collection,
      },
      item_desc: {
        title: "Description",
        type: "string",
        value: item.item_desc
          ? item.item_desc.__text
            ? item.item_desc.__text
            : item.item_desc
          : null,
      },
      item_category: {
        title: "Category",
        type: "link",
        value: item.item_category,
      },
      item_primary: {
        title: "Primary",
        type: "link",
        value: item.item_primary,
      },
      item_secondary: {
        title: "Secondary",
        type: "link",
        value: item.item_secondary,
      },
      item_classification: {
        title: "Classification",
        type: "link",
        value: item.item_classification,
      },
      item_sub_category: {
        title: "Sub-Classification",
        type: "string",
        value: item.item_sub_category,
      },
      item_tertiary: {
        title: "Tertiary",
        type: "link",
        value: item.item_tertiary,
      },
      item_place: {
        title: "Place of Production",
        type: "array",
        value: item.item_place,
      },
      item_material: {
        title: "Materials",
        type: "array_link",
        value: item.item_material,
      },
      item_maker: {
        title: "Maker(s)",
        type: "array_link",
        value: item.item_maker,
      },
    },
  };
}

export function getFirstImage(item) {
  (item);
  let imageArray = item.media.filter((e) => e.type === "image");
  if (imageArray.length === 0) {
    return null;
  }
  return imageArray[0].ref;
}
export function getFirstImageAlt(item) {
  (item);
  let imageArray = item.media.filter((e) => e.type === "image");
  if (imageArray.length === 0) {
    return null;
  }
  return imageArray[0].alt_text;
}
export function hasImage(item) {
  let array = item.media.filter((e) => e.type === "image");
  if (array.length === 0) {
    return false;
  }
  return true;
}
export function hasVideo(item) {
  let array = item.media.filter((e) => e.type === "video");
  if (array.length === 0) {
    return false;
  }
  return true;
}
export function hasAudio(item) {
  let array = item.media.filter((e) => e.type === "audio");
  if (array.length === 0) {
    return false;
  }
  return true;
}
export function hasTextual(item) {
  let array = item.media.filter((e) => e.type === "text");
  if (array.length === 0) {
    return false;
  }
  return true;
}

export function hasChenhall(data) {
  return (
    CHENHALL_FIELD.filter((e) => data.data[e].value !== undefined).length > 0
  );
}
export const DETAIL_DATA_FIELD = [
  "item_refd",
  "item_alt_object_name",
  "item_title",
  "item_collection",
  "item_site",
  "item_date",
  "item_maker",
  "item_place",
  "item_desc",
  "item_material",
];

export const CHENHALL_FIELD = [
  "item_category",
  "item_classification",
  "item_sub_category",
  "item_primary",
  "item_secondary",
  "item_tertiary",
];
