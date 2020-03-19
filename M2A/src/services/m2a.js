export function extractData(item) {
  return {
    item_sisn: item.item_sisn,
    item_refd: item.item_refd,
    item_link: item.item_link,
    item_level_desc: item.item_level_desc,
    item_title: item.item_title,
    item_date: item.item_date ? item.item_date : "",
    item_subject: item.item_subject ? item.item_subject : [],
    item_box: item.item_box ? item.item_box : "",
    item_box_qualifier: item.item_box_qualifier ? item.item_box_qualifier : "",
    item_folder: item.item_folder ? item.item_folder : "",
    item_collection: item.item_collection ? item.item_collection : "",
    item_desc: item.item_desc ? item.item_desc : "",
    item_location: item.item_location ? item.item_location : [],
    item_make: item.item_make ? item.item_make : [],
    item_model: item.item_model ? item.item_model : [],
    item_color: item.item_color ? item.item_color : []
  };
}
