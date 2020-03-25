exports.onCreatePage = async ({page, actions}) => {
  const {createPage} = actions;
  if (page.path.match(/^\/map/)) {
    page.matchPath = `/map/*`;
    createPage(page);
  }
};
