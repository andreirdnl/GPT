class GoogleAds {
  listPlacements = () => {
    if (window.googletag && googletag.apiReady) {
      let arr = googletag.pubads().getSlots();
      let availablePlacements = new Set();
      arr.forEach((elm) => {
        let aux = [...elm.getTargetingKeys()];
        aux.forEach((a) => availablePlacements.add(a));
      });
      availablePlacements.forEach((elm) => console.log("tag: ", elm));
    } else console.log("googletag not loaded");
  };

  listPlacementsForEachSlot = () => {
    if (window.googletag && googletag.apiReady) {
      let arr = googletag.pubads().getSlots();
      arr.forEach((elm) =>
        console.log(`Slot ${arr.indexOf(elm)}`, elm.getTargetingKeys())
      );
    } else console.log("googletag not loaded");
  };

  refresh = (value) => {
    if (value) {
      googletag.pubads().refresh(value);
      console.log("refreshed on value");
    } else {
      googletag.pubads().refresh();
      console.log("refreshed all");
    }
  };
}
