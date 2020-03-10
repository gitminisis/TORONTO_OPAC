export function extractDetailData(data) {
  return {
    author: data.item.item_author_group,
    collection: data.item.item_collection,
    description: data.item.item_description,
    early: data.item.item_early,
    late: data.item.item_late,
    link: data.item.item_link,
    title: data.item.item_title ? data.item.item_title : "Untitled Record",
    status: data.item.item_status,
    sisn: data.item.item_sisn,
    maker: data.item.item_maker_group,
    id: data.item.item_id
  };
}

export function extractSummaryData(data) {
  return {
    item: data.item.map(el => {
      return {
        author: el.item_author_group,
        collection: el.item_collection,
        description: el.item_description,
        early: el.item_early,
        late: el.item_late,
        link: el.item_link,
        title: el.item_title ? el.item_title : "Untitled Record",
        status: el.item_status,
        sisn: el.item_sisn,
        checkbox: el.item_checkbox
      };3
    })
  };
}
