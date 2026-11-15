require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
  const webmap = new WebMap({
    portalItem: {
      id: "576b5f1c8e764964abaa0d9b5716d826"
    }
  });

  const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });
});
